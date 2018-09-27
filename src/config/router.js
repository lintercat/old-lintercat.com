import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import i18n, {
  locale as defaultLocale,
  messages as i18nMessages
} from '@/i18n'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: ':lang' }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let language = to.params.lang
  let isLanguageAvailable = i18nMessages.hasOwnProperty(language)
  if (!language || !isLanguageAvailable) {
    language = defaultLocale
  }

  i18n.locale = language
  next()
})

export default router
