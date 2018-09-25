<template lang='pug'>
  motion(:values='styles' :spring='spring')
    template(slot-scope='_style')
      .hero(:style='{ height: _style.height + "px" }')
        TopBar
        Phrases
        Clouds
</template>

<script>
import {
  heroBackgroundSpring as spring,
  heroChangeDelay as changeDelay
} from '@/config/motion'
import ChangesAfterLoad from '@/mixins/ChangesAfterLoad'
import TopBar from './components/TopBar'
import Clouds from './components/Clouds'
import Phrases from './components/Phrases'

export default {
  mixins: [ChangesAfterLoad],

  components: {
    TopBar,
    Phrases,
    Clouds
  },

  data () {
    return {
      spring,
      styles: {
        height: window.innerHeight
      },
      changeDelay
    }
  },

  methods: {
    change () {
      this.styles = {
        height: window.innerHeight * 0.6
      }
    }
  }
}
</script>

<style scoped lang='sass'>
  .hero
    overflow: hidden
    box-sizing: content-box
    padding-bottom: 50px
    position: relative
    text-align: center
    background-image: url('./images/background.svg')
    background-size: cover
    background-position: center bottom
    background-repeat: no-repeat
    color: from-palette(white)
</style>
