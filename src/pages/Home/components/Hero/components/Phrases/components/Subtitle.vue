<template lang='pug'>
  motion(:values='styles' :spring='spring')
    template(slot-scope='_styles')
      .second.phrase(:style='{ transform: `scale(${ _styles.scale })`, opacity: _styles.opacity }')
        | {{ $t('hero.subtitle') }}
</template>

<script>
import { heroTextSpring as spring } from '@/config/motion'
import ChangesAfterLoad from '@/mixins/ChangesAfterLoad'

export default {
  mixins: [ChangesAfterLoad],

  data () {
    return {
      spring,
      changeDelay: 1100,
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
  .second.phrase
    letter-spacing: -1.1px
    font: 400 90px/1 'Satisfy', $header-font-family
</style>
