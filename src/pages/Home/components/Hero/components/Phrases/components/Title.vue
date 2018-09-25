<template lang='pug'>
  motion(:values='styles' :spring='spring')
    template(slot-scope='_styles')
      .first.phrase(:style='{ transform: `scale(${ _styles.scale })`, opacity: _styles.opacity }')
        | {{ $t('hero.title') }}
</template>

<script>
import { heroTextSpring as spring } from '@/config/motion'
import ChangesAfterLoad from '@/mixins/ChangesAfterLoad'

export default {
  mixins: [ChangesAfterLoad],

  data () {
    return {
      spring,
      changeDelay: 400,
      styles: {
        scale: 0.9,
        opacity: 0
      }
    }
  },

  methods: {
    change () {
      this.styles = {
        scale: 1,
        opacity: 1
      }
    }
  }
}
</script>

<style lang='sass'>
  .first.phrase
    letter-spacing: -1.35px
    font: 600 90px/1.2 $header-font-family
    text-transform: uppercase
</style>
