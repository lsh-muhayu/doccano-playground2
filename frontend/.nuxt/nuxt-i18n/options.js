import locale6c33731f from '../../i18n/en'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"name":"English","code":"en","iso":"en-CA","file":"en"},{"name":"中文","code":"zh","iso":"zh-CN","file":"zh"},{"name":"Français","code":"fr","iso":"fr-CA","file":"fr"},{"name":"Deutsch","code":"de","iso":"de-DE","file":"de"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/aodem/playground/doccano-playground2/frontend/i18n",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"name":"English","code":"en","iso":"en-CA","file":"en"},{"name":"中文","code":"zh","iso":"zh-CN","file":"zh"},{"name":"Français","code":"fr","iso":"fr-CA","file":"fr"},{"name":"Deutsch","code":"de","iso":"de-DE","file":"de"}],
  localeCodes: ["en","zh","fr","de"],
}

export const localeMessages = {
  'en': () => Promise.resolve(locale6c33731f),
  'zh': () => import('../../i18n/zh' /* webpackChunkName: "lang-zh" */),
  'fr': () => import('../../i18n/fr' /* webpackChunkName: "lang-fr" */),
  'de': () => import('../../i18n/de' /* webpackChunkName: "lang-de" */),
}
