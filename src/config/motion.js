import Vue from 'vue'
import VueMotion from 'vue-motion'

Vue.use(VueMotion)

export const heroBackgroundSpring = {
  stiffness: 40,
  damping: 5,
  precision: 0.01
}

export const heroChangeDelay = 1900
