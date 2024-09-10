import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _88e084a4 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _31d30ebc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _57aaff03 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _7db47fd1 = () => interopDefault(import('../pages/demo/image-caption/index.vue' /* webpackChunkName: "pages/demo/image-caption/index" */))
const _571ed99e = () => interopDefault(import('../pages/demo/image-classification/index.vue' /* webpackChunkName: "pages/demo/image-classification/index" */))
const _32de8c9c = () => interopDefault(import('../pages/demo/intent-detection-and-slot-filling/index.vue' /* webpackChunkName: "pages/demo/intent-detection-and-slot-filling/index" */))
const _1b87d23a = () => interopDefault(import('../pages/demo/named-entity-recognition/index.vue' /* webpackChunkName: "pages/demo/named-entity-recognition/index" */))
const _21bbce50 = () => interopDefault(import('../pages/demo/object-detection/index.vue' /* webpackChunkName: "pages/demo/object-detection/index" */))
const _5e364c8a = () => interopDefault(import('../pages/demo/segmentation/index.vue' /* webpackChunkName: "pages/demo/segmentation/index" */))
const _d66e385a = () => interopDefault(import('../pages/demo/sentiment-analysis/index.vue' /* webpackChunkName: "pages/demo/sentiment-analysis/index" */))
const _dd822126 = () => interopDefault(import('../pages/demo/speech-to-text/index.vue' /* webpackChunkName: "pages/demo/speech-to-text/index" */))
const _6ab4cef9 = () => interopDefault(import('../pages/demo/text-to-sql/index.vue' /* webpackChunkName: "pages/demo/text-to-sql/index" */))
const _c43d5164 = () => interopDefault(import('../pages/demo/translation/index.vue' /* webpackChunkName: "pages/demo/translation/index" */))
const _752da7ca = () => interopDefault(import('../pages/projects/create.vue' /* webpackChunkName: "pages/projects/create" */))
const _19d23f24 = () => interopDefault(import('../pages/projects/_id/index.vue' /* webpackChunkName: "pages/projects/_id/index" */))
const _8246aaea = () => interopDefault(import('../pages/projects/_id/comments/index.vue' /* webpackChunkName: "pages/projects/_id/comments/index" */))
const _7baedf97 = () => interopDefault(import('../pages/projects/_id/dataset/index.vue' /* webpackChunkName: "pages/projects/_id/dataset/index" */))
const _7bdf910f = () => interopDefault(import('../pages/projects/_id/guideline/index.vue' /* webpackChunkName: "pages/projects/_id/guideline/index" */))
const _046ab805 = () => interopDefault(import('../pages/projects/_id/image-captioning/index.vue' /* webpackChunkName: "pages/projects/_id/image-captioning/index" */))
const _137b6c2f = () => interopDefault(import('../pages/projects/_id/image-classification/index.vue' /* webpackChunkName: "pages/projects/_id/image-classification/index" */))
const _7040c05e = () => interopDefault(import('../pages/projects/_id/intent-detection-and-slot-filling/index.vue' /* webpackChunkName: "pages/projects/_id/intent-detection-and-slot-filling/index" */))
const _ceb46c54 = () => interopDefault(import('../pages/projects/_id/labels/index.vue' /* webpackChunkName: "pages/projects/_id/labels/index" */))
const _08c35ef8 = () => interopDefault(import('../pages/projects/_id/members/index.vue' /* webpackChunkName: "pages/projects/_id/members/index" */))
const _3b796bbc = () => interopDefault(import('../pages/projects/_id/metrics/index.vue' /* webpackChunkName: "pages/projects/_id/metrics/index" */))
const _44b25364 = () => interopDefault(import('../pages/projects/_id/object-detection/index.vue' /* webpackChunkName: "pages/projects/_id/object-detection/index" */))
const _271f90b9 = () => interopDefault(import('../pages/projects/_id/segmentation/index.vue' /* webpackChunkName: "pages/projects/_id/segmentation/index" */))
const _9aa696ce = () => interopDefault(import('../pages/projects/_id/sequence-labeling/index.vue' /* webpackChunkName: "pages/projects/_id/sequence-labeling/index" */))
const _572d3d9e = () => interopDefault(import('../pages/projects/_id/sequence-to-sequence/index.vue' /* webpackChunkName: "pages/projects/_id/sequence-to-sequence/index" */))
const _b6724c0c = () => interopDefault(import('../pages/projects/_id/settings/index.vue' /* webpackChunkName: "pages/projects/_id/settings/index" */))
const _43a7deeb = () => interopDefault(import('../pages/projects/_id/speech-to-text/index.vue' /* webpackChunkName: "pages/projects/_id/speech-to-text/index" */))
const _aca5efb6 = () => interopDefault(import('../pages/projects/_id/text-classification/index.vue' /* webpackChunkName: "pages/projects/_id/text-classification/index" */))
const _46869682 = () => interopDefault(import('../pages/projects/_id/dataset/export.vue' /* webpackChunkName: "pages/projects/_id/dataset/export" */))
const _4ef1b430 = () => interopDefault(import('../pages/projects/_id/dataset/import.vue' /* webpackChunkName: "pages/projects/_id/dataset/import" */))
const _da26f5b6 = () => interopDefault(import('../pages/projects/_id/labels/add.vue' /* webpackChunkName: "pages/projects/_id/labels/add" */))
const _5e4fdc5e = () => interopDefault(import('../pages/projects/_id/labels/import.vue' /* webpackChunkName: "pages/projects/_id/labels/import" */))
const _66cd5e96 = () => interopDefault(import('../pages/projects/_id/dataset/_example_id/edit.vue' /* webpackChunkName: "pages/projects/_id/dataset/_example_id/edit" */))
const _272cd8e0 = () => interopDefault(import('../pages/projects/_id/labels/_label_id/edit.vue' /* webpackChunkName: "pages/projects/_id/labels/_label_id/edit" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _88e084a4,
    name: "auth___en"
  }, {
    path: "/de",
    component: _31d30ebc,
    name: "index___de"
  }, {
    path: "/fr",
    component: _31d30ebc,
    name: "index___fr"
  }, {
    path: "/projects",
    component: _57aaff03,
    name: "projects___en"
  }, {
    path: "/zh",
    component: _31d30ebc,
    name: "index___zh"
  }, {
    path: "/de/auth",
    component: _88e084a4,
    name: "auth___de"
  }, {
    path: "/de/projects",
    component: _57aaff03,
    name: "projects___de"
  }, {
    path: "/demo/image-caption",
    component: _7db47fd1,
    name: "demo-image-caption___en"
  }, {
    path: "/demo/image-classification",
    component: _571ed99e,
    name: "demo-image-classification___en"
  }, {
    path: "/demo/intent-detection-and-slot-filling",
    component: _32de8c9c,
    name: "demo-intent-detection-and-slot-filling___en"
  }, {
    path: "/demo/named-entity-recognition",
    component: _1b87d23a,
    name: "demo-named-entity-recognition___en"
  }, {
    path: "/demo/object-detection",
    component: _21bbce50,
    name: "demo-object-detection___en"
  }, {
    path: "/demo/segmentation",
    component: _5e364c8a,
    name: "demo-segmentation___en"
  }, {
    path: "/demo/sentiment-analysis",
    component: _d66e385a,
    name: "demo-sentiment-analysis___en"
  }, {
    path: "/demo/speech-to-text",
    component: _dd822126,
    name: "demo-speech-to-text___en"
  }, {
    path: "/demo/text-to-sql",
    component: _6ab4cef9,
    name: "demo-text-to-sql___en"
  }, {
    path: "/demo/translation",
    component: _c43d5164,
    name: "demo-translation___en"
  }, {
    path: "/fr/auth",
    component: _88e084a4,
    name: "auth___fr"
  }, {
    path: "/fr/projects",
    component: _57aaff03,
    name: "projects___fr"
  }, {
    path: "/projects/create",
    component: _752da7ca,
    name: "projects-create___en"
  }, {
    path: "/zh/auth",
    component: _88e084a4,
    name: "auth___zh"
  }, {
    path: "/zh/projects",
    component: _57aaff03,
    name: "projects___zh"
  }, {
    path: "/de/demo/image-caption",
    component: _7db47fd1,
    name: "demo-image-caption___de"
  }, {
    path: "/de/demo/image-classification",
    component: _571ed99e,
    name: "demo-image-classification___de"
  }, {
    path: "/de/demo/intent-detection-and-slot-filling",
    component: _32de8c9c,
    name: "demo-intent-detection-and-slot-filling___de"
  }, {
    path: "/de/demo/named-entity-recognition",
    component: _1b87d23a,
    name: "demo-named-entity-recognition___de"
  }, {
    path: "/de/demo/object-detection",
    component: _21bbce50,
    name: "demo-object-detection___de"
  }, {
    path: "/de/demo/segmentation",
    component: _5e364c8a,
    name: "demo-segmentation___de"
  }, {
    path: "/de/demo/sentiment-analysis",
    component: _d66e385a,
    name: "demo-sentiment-analysis___de"
  }, {
    path: "/de/demo/speech-to-text",
    component: _dd822126,
    name: "demo-speech-to-text___de"
  }, {
    path: "/de/demo/text-to-sql",
    component: _6ab4cef9,
    name: "demo-text-to-sql___de"
  }, {
    path: "/de/demo/translation",
    component: _c43d5164,
    name: "demo-translation___de"
  }, {
    path: "/de/projects/create",
    component: _752da7ca,
    name: "projects-create___de"
  }, {
    path: "/fr/demo/image-caption",
    component: _7db47fd1,
    name: "demo-image-caption___fr"
  }, {
    path: "/fr/demo/image-classification",
    component: _571ed99e,
    name: "demo-image-classification___fr"
  }, {
    path: "/fr/demo/intent-detection-and-slot-filling",
    component: _32de8c9c,
    name: "demo-intent-detection-and-slot-filling___fr"
  }, {
    path: "/fr/demo/named-entity-recognition",
    component: _1b87d23a,
    name: "demo-named-entity-recognition___fr"
  }, {
    path: "/fr/demo/object-detection",
    component: _21bbce50,
    name: "demo-object-detection___fr"
  }, {
    path: "/fr/demo/segmentation",
    component: _5e364c8a,
    name: "demo-segmentation___fr"
  }, {
    path: "/fr/demo/sentiment-analysis",
    component: _d66e385a,
    name: "demo-sentiment-analysis___fr"
  }, {
    path: "/fr/demo/speech-to-text",
    component: _dd822126,
    name: "demo-speech-to-text___fr"
  }, {
    path: "/fr/demo/text-to-sql",
    component: _6ab4cef9,
    name: "demo-text-to-sql___fr"
  }, {
    path: "/fr/demo/translation",
    component: _c43d5164,
    name: "demo-translation___fr"
  }, {
    path: "/fr/projects/create",
    component: _752da7ca,
    name: "projects-create___fr"
  }, {
    path: "/zh/demo/image-caption",
    component: _7db47fd1,
    name: "demo-image-caption___zh"
  }, {
    path: "/zh/demo/image-classification",
    component: _571ed99e,
    name: "demo-image-classification___zh"
  }, {
    path: "/zh/demo/intent-detection-and-slot-filling",
    component: _32de8c9c,
    name: "demo-intent-detection-and-slot-filling___zh"
  }, {
    path: "/zh/demo/named-entity-recognition",
    component: _1b87d23a,
    name: "demo-named-entity-recognition___zh"
  }, {
    path: "/zh/demo/object-detection",
    component: _21bbce50,
    name: "demo-object-detection___zh"
  }, {
    path: "/zh/demo/segmentation",
    component: _5e364c8a,
    name: "demo-segmentation___zh"
  }, {
    path: "/zh/demo/sentiment-analysis",
    component: _d66e385a,
    name: "demo-sentiment-analysis___zh"
  }, {
    path: "/zh/demo/speech-to-text",
    component: _dd822126,
    name: "demo-speech-to-text___zh"
  }, {
    path: "/zh/demo/text-to-sql",
    component: _6ab4cef9,
    name: "demo-text-to-sql___zh"
  }, {
    path: "/zh/demo/translation",
    component: _c43d5164,
    name: "demo-translation___zh"
  }, {
    path: "/zh/projects/create",
    component: _752da7ca,
    name: "projects-create___zh"
  }, {
    path: "/",
    component: _31d30ebc,
    name: "index___en"
  }, {
    path: "/de/projects/:id",
    component: _19d23f24,
    name: "projects-id___de"
  }, {
    path: "/fr/projects/:id",
    component: _19d23f24,
    name: "projects-id___fr"
  }, {
    path: "/zh/projects/:id",
    component: _19d23f24,
    name: "projects-id___zh"
  }, {
    path: "/de/projects/:id/comments",
    component: _8246aaea,
    name: "projects-id-comments___de"
  }, {
    path: "/de/projects/:id/dataset",
    component: _7baedf97,
    name: "projects-id-dataset___de"
  }, {
    path: "/de/projects/:id/guideline",
    component: _7bdf910f,
    name: "projects-id-guideline___de"
  }, {
    path: "/de/projects/:id/image-captioning",
    component: _046ab805,
    name: "projects-id-image-captioning___de"
  }, {
    path: "/de/projects/:id/image-classification",
    component: _137b6c2f,
    name: "projects-id-image-classification___de"
  }, {
    path: "/de/projects/:id/intent-detection-and-slot-filling",
    component: _7040c05e,
    name: "projects-id-intent-detection-and-slot-filling___de"
  }, {
    path: "/de/projects/:id/labels",
    component: _ceb46c54,
    name: "projects-id-labels___de"
  }, {
    path: "/de/projects/:id/members",
    component: _08c35ef8,
    name: "projects-id-members___de"
  }, {
    path: "/de/projects/:id/metrics",
    component: _3b796bbc,
    name: "projects-id-metrics___de"
  }, {
    path: "/de/projects/:id/object-detection",
    component: _44b25364,
    name: "projects-id-object-detection___de"
  }, {
    path: "/de/projects/:id/segmentation",
    component: _271f90b9,
    name: "projects-id-segmentation___de"
  }, {
    path: "/de/projects/:id/sequence-labeling",
    component: _9aa696ce,
    name: "projects-id-sequence-labeling___de"
  }, {
    path: "/de/projects/:id/sequence-to-sequence",
    component: _572d3d9e,
    name: "projects-id-sequence-to-sequence___de"
  }, {
    path: "/de/projects/:id/settings",
    component: _b6724c0c,
    name: "projects-id-settings___de"
  }, {
    path: "/de/projects/:id/speech-to-text",
    component: _43a7deeb,
    name: "projects-id-speech-to-text___de"
  }, {
    path: "/de/projects/:id/text-classification",
    component: _aca5efb6,
    name: "projects-id-text-classification___de"
  }, {
    path: "/fr/projects/:id/comments",
    component: _8246aaea,
    name: "projects-id-comments___fr"
  }, {
    path: "/fr/projects/:id/dataset",
    component: _7baedf97,
    name: "projects-id-dataset___fr"
  }, {
    path: "/fr/projects/:id/guideline",
    component: _7bdf910f,
    name: "projects-id-guideline___fr"
  }, {
    path: "/fr/projects/:id/image-captioning",
    component: _046ab805,
    name: "projects-id-image-captioning___fr"
  }, {
    path: "/fr/projects/:id/image-classification",
    component: _137b6c2f,
    name: "projects-id-image-classification___fr"
  }, {
    path: "/fr/projects/:id/intent-detection-and-slot-filling",
    component: _7040c05e,
    name: "projects-id-intent-detection-and-slot-filling___fr"
  }, {
    path: "/fr/projects/:id/labels",
    component: _ceb46c54,
    name: "projects-id-labels___fr"
  }, {
    path: "/fr/projects/:id/members",
    component: _08c35ef8,
    name: "projects-id-members___fr"
  }, {
    path: "/fr/projects/:id/metrics",
    component: _3b796bbc,
    name: "projects-id-metrics___fr"
  }, {
    path: "/fr/projects/:id/object-detection",
    component: _44b25364,
    name: "projects-id-object-detection___fr"
  }, {
    path: "/fr/projects/:id/segmentation",
    component: _271f90b9,
    name: "projects-id-segmentation___fr"
  }, {
    path: "/fr/projects/:id/sequence-labeling",
    component: _9aa696ce,
    name: "projects-id-sequence-labeling___fr"
  }, {
    path: "/fr/projects/:id/sequence-to-sequence",
    component: _572d3d9e,
    name: "projects-id-sequence-to-sequence___fr"
  }, {
    path: "/fr/projects/:id/settings",
    component: _b6724c0c,
    name: "projects-id-settings___fr"
  }, {
    path: "/fr/projects/:id/speech-to-text",
    component: _43a7deeb,
    name: "projects-id-speech-to-text___fr"
  }, {
    path: "/fr/projects/:id/text-classification",
    component: _aca5efb6,
    name: "projects-id-text-classification___fr"
  }, {
    path: "/zh/projects/:id/comments",
    component: _8246aaea,
    name: "projects-id-comments___zh"
  }, {
    path: "/zh/projects/:id/dataset",
    component: _7baedf97,
    name: "projects-id-dataset___zh"
  }, {
    path: "/zh/projects/:id/guideline",
    component: _7bdf910f,
    name: "projects-id-guideline___zh"
  }, {
    path: "/zh/projects/:id/image-captioning",
    component: _046ab805,
    name: "projects-id-image-captioning___zh"
  }, {
    path: "/zh/projects/:id/image-classification",
    component: _137b6c2f,
    name: "projects-id-image-classification___zh"
  }, {
    path: "/zh/projects/:id/intent-detection-and-slot-filling",
    component: _7040c05e,
    name: "projects-id-intent-detection-and-slot-filling___zh"
  }, {
    path: "/zh/projects/:id/labels",
    component: _ceb46c54,
    name: "projects-id-labels___zh"
  }, {
    path: "/zh/projects/:id/members",
    component: _08c35ef8,
    name: "projects-id-members___zh"
  }, {
    path: "/zh/projects/:id/metrics",
    component: _3b796bbc,
    name: "projects-id-metrics___zh"
  }, {
    path: "/zh/projects/:id/object-detection",
    component: _44b25364,
    name: "projects-id-object-detection___zh"
  }, {
    path: "/zh/projects/:id/segmentation",
    component: _271f90b9,
    name: "projects-id-segmentation___zh"
  }, {
    path: "/zh/projects/:id/sequence-labeling",
    component: _9aa696ce,
    name: "projects-id-sequence-labeling___zh"
  }, {
    path: "/zh/projects/:id/sequence-to-sequence",
    component: _572d3d9e,
    name: "projects-id-sequence-to-sequence___zh"
  }, {
    path: "/zh/projects/:id/settings",
    component: _b6724c0c,
    name: "projects-id-settings___zh"
  }, {
    path: "/zh/projects/:id/speech-to-text",
    component: _43a7deeb,
    name: "projects-id-speech-to-text___zh"
  }, {
    path: "/zh/projects/:id/text-classification",
    component: _aca5efb6,
    name: "projects-id-text-classification___zh"
  }, {
    path: "/de/projects/:id/dataset/export",
    component: _46869682,
    name: "projects-id-dataset-export___de"
  }, {
    path: "/de/projects/:id/dataset/import",
    component: _4ef1b430,
    name: "projects-id-dataset-import___de"
  }, {
    path: "/de/projects/:id/labels/add",
    component: _da26f5b6,
    name: "projects-id-labels-add___de"
  }, {
    path: "/de/projects/:id/labels/import",
    component: _5e4fdc5e,
    name: "projects-id-labels-import___de"
  }, {
    path: "/fr/projects/:id/dataset/export",
    component: _46869682,
    name: "projects-id-dataset-export___fr"
  }, {
    path: "/fr/projects/:id/dataset/import",
    component: _4ef1b430,
    name: "projects-id-dataset-import___fr"
  }, {
    path: "/fr/projects/:id/labels/add",
    component: _da26f5b6,
    name: "projects-id-labels-add___fr"
  }, {
    path: "/fr/projects/:id/labels/import",
    component: _5e4fdc5e,
    name: "projects-id-labels-import___fr"
  }, {
    path: "/zh/projects/:id/dataset/export",
    component: _46869682,
    name: "projects-id-dataset-export___zh"
  }, {
    path: "/zh/projects/:id/dataset/import",
    component: _4ef1b430,
    name: "projects-id-dataset-import___zh"
  }, {
    path: "/zh/projects/:id/labels/add",
    component: _da26f5b6,
    name: "projects-id-labels-add___zh"
  }, {
    path: "/zh/projects/:id/labels/import",
    component: _5e4fdc5e,
    name: "projects-id-labels-import___zh"
  }, {
    path: "/de/projects/:id/dataset/:example_id/edit",
    component: _66cd5e96,
    name: "projects-id-dataset-example_id-edit___de"
  }, {
    path: "/de/projects/:id/labels/:label_id/edit",
    component: _272cd8e0,
    name: "projects-id-labels-label_id-edit___de"
  }, {
    path: "/fr/projects/:id/dataset/:example_id/edit",
    component: _66cd5e96,
    name: "projects-id-dataset-example_id-edit___fr"
  }, {
    path: "/fr/projects/:id/labels/:label_id/edit",
    component: _272cd8e0,
    name: "projects-id-labels-label_id-edit___fr"
  }, {
    path: "/zh/projects/:id/dataset/:example_id/edit",
    component: _66cd5e96,
    name: "projects-id-dataset-example_id-edit___zh"
  }, {
    path: "/zh/projects/:id/labels/:label_id/edit",
    component: _272cd8e0,
    name: "projects-id-labels-label_id-edit___zh"
  }, {
    path: "/projects/:id",
    component: _19d23f24,
    name: "projects-id___en"
  }, {
    path: "/projects/:id/comments",
    component: _8246aaea,
    name: "projects-id-comments___en"
  }, {
    path: "/projects/:id/dataset",
    component: _7baedf97,
    name: "projects-id-dataset___en"
  }, {
    path: "/projects/:id/guideline",
    component: _7bdf910f,
    name: "projects-id-guideline___en"
  }, {
    path: "/projects/:id/image-captioning",
    component: _046ab805,
    name: "projects-id-image-captioning___en"
  }, {
    path: "/projects/:id/image-classification",
    component: _137b6c2f,
    name: "projects-id-image-classification___en"
  }, {
    path: "/projects/:id/intent-detection-and-slot-filling",
    component: _7040c05e,
    name: "projects-id-intent-detection-and-slot-filling___en"
  }, {
    path: "/projects/:id/labels",
    component: _ceb46c54,
    name: "projects-id-labels___en"
  }, {
    path: "/projects/:id/members",
    component: _08c35ef8,
    name: "projects-id-members___en"
  }, {
    path: "/projects/:id/metrics",
    component: _3b796bbc,
    name: "projects-id-metrics___en"
  }, {
    path: "/projects/:id/object-detection",
    component: _44b25364,
    name: "projects-id-object-detection___en"
  }, {
    path: "/projects/:id/segmentation",
    component: _271f90b9,
    name: "projects-id-segmentation___en"
  }, {
    path: "/projects/:id/sequence-labeling",
    component: _9aa696ce,
    name: "projects-id-sequence-labeling___en"
  }, {
    path: "/projects/:id/sequence-to-sequence",
    component: _572d3d9e,
    name: "projects-id-sequence-to-sequence___en"
  }, {
    path: "/projects/:id/settings",
    component: _b6724c0c,
    name: "projects-id-settings___en"
  }, {
    path: "/projects/:id/speech-to-text",
    component: _43a7deeb,
    name: "projects-id-speech-to-text___en"
  }, {
    path: "/projects/:id/text-classification",
    component: _aca5efb6,
    name: "projects-id-text-classification___en"
  }, {
    path: "/projects/:id/dataset/export",
    component: _46869682,
    name: "projects-id-dataset-export___en"
  }, {
    path: "/projects/:id/dataset/import",
    component: _4ef1b430,
    name: "projects-id-dataset-import___en"
  }, {
    path: "/projects/:id/labels/add",
    component: _da26f5b6,
    name: "projects-id-labels-add___en"
  }, {
    path: "/projects/:id/labels/import",
    component: _5e4fdc5e,
    name: "projects-id-labels-import___en"
  }, {
    path: "/projects/:id/dataset/:example_id/edit",
    component: _66cd5e96,
    name: "projects-id-dataset-example_id-edit___en"
  }, {
    path: "/projects/:id/labels/:label_id/edit",
    component: _272cd8e0,
    name: "projects-id-labels-label_id-edit___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
