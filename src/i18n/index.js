import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Locales
import en from './en.json'

Vue.use(VueI18n)

const messages = {
  en
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
