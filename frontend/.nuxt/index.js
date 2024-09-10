import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_48581722 from 'nuxt_plugin_plugin_48581722' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_plugin_5acc0034 from 'nuxt_plugin_plugin_5acc0034' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_axios_d31da53c from 'nuxt_plugin_axios_d31da53c' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_pluginutils_120d7119 from 'nuxt_plugin_pluginutils_120d7119' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_7a761c24 from 'nuxt_plugin_pluginrouting_7a761c24' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_2030e1cb from 'nuxt_plugin_pluginmain_2030e1cb' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_googleanalytics_28c95984 from 'nuxt_plugin_googleanalytics_28c95984' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_filters_2dd71012 from 'nuxt_plugin_filters_2dd71012' // Source: ../plugins/filters.js (mode: 'all')
import nuxt_plugin_vueyoutube_6da200de from 'nuxt_plugin_vueyoutube_6da200de' // Source: ../plugins/vue-youtube.js (mode: 'all')
import nuxt_plugin_vueshortkey_7ae76292 from 'nuxt_plugin_vueshortkey_7ae76292' // Source: ../plugins/vue-shortkey.js (mode: 'all')
import nuxt_plugin_vuekonva_edb24e02 from 'nuxt_plugin_vuekonva_edb24e02' // Source: ../plugins/vue-konva.js (mode: 'all')
import nuxt_plugin_services_4e38a4d9 from 'nuxt_plugin_services_4e38a4d9' // Source: ../plugins/services.ts (mode: 'all')
import nuxt_plugin_repositories_a519aae2 from 'nuxt_plugin_repositories_a519aae2' // Source: ../plugins/repositories.ts (mode: 'all')
import nuxt_plugin_color_64c91b40 from 'nuxt_plugin_color_64c91b40' // Source: ../plugins/color.ts (mode: 'all')
import nuxt_plugin_role_38e012c1 from 'nuxt_plugin_role_38e012c1' // Source: ../plugins/role.ts (mode: 'all')
import nuxt_plugin_meta_045e5846 from 'nuxt_plugin_meta_045e5846' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - doccano","title":"doccano","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"doccano is an open source annotation tools for machine learning practitioner."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      errPageReady: false,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        nuxt.errPageReady = false
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_48581722 === 'function') {
    await nuxt_plugin_plugin_48581722(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_5acc0034 === 'function') {
    await nuxt_plugin_plugin_5acc0034(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_d31da53c === 'function') {
    await nuxt_plugin_axios_d31da53c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_120d7119 === 'function') {
    await nuxt_plugin_pluginutils_120d7119(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7a761c24 === 'function') {
    await nuxt_plugin_pluginrouting_7a761c24(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_2030e1cb === 'function') {
    await nuxt_plugin_pluginmain_2030e1cb(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_28c95984 === 'function') {
    await nuxt_plugin_googleanalytics_28c95984(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_2dd71012 === 'function') {
    await nuxt_plugin_filters_2dd71012(app.context, inject)
  }

  if (typeof nuxt_plugin_vueyoutube_6da200de === 'function') {
    await nuxt_plugin_vueyoutube_6da200de(app.context, inject)
  }

  if (typeof nuxt_plugin_vueshortkey_7ae76292 === 'function') {
    await nuxt_plugin_vueshortkey_7ae76292(app.context, inject)
  }

  if (typeof nuxt_plugin_vuekonva_edb24e02 === 'function') {
    await nuxt_plugin_vuekonva_edb24e02(app.context, inject)
  }

  if (typeof nuxt_plugin_services_4e38a4d9 === 'function') {
    await nuxt_plugin_services_4e38a4d9(app.context, inject)
  }

  if (typeof nuxt_plugin_repositories_a519aae2 === 'function') {
    await nuxt_plugin_repositories_a519aae2(app.context, inject)
  }

  if (typeof nuxt_plugin_color_64c91b40 === 'function') {
    await nuxt_plugin_color_64c91b40(app.context, inject)
  }

  if (typeof nuxt_plugin_role_38e012c1 === 'function') {
    await nuxt_plugin_role_38e012c1(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_045e5846 === 'function') {
    await nuxt_plugin_meta_045e5846(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
