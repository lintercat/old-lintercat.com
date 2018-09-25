import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Locales
import en from './en.json'
import es from './es.json'

export const locale = 'es'
export const messages = {
  en,
  es
}

Vue.use(VueI18n)
const i18n = new VueI18n({ locale, messages })
export default i18n
