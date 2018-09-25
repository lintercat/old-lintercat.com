<template lang='pug'>
  motion(:values='styles' :spring='spring')
    template(slot-scope='_style')
      .brand(:style='{ transform: `scale(${ _style.scale })`, opacity: _style.opacity }')
        img.logo(src='~@/global/images/logo.svg')
        .name {{ $t('hero.topBar.brand') }}
</template>

<script>
import {
  heroBackgroundSpring as spring,
  heroChangeDelay as changeDelay
} from '@/config/motion'
import ChangesAfterLoad from '@/mixins/ChangesAfterLoad'

export default {
  mixins: [ChangesAfterLoad],

  data () {
    return {
      spring,
      styles: {
        scale: 0.8,
        opacity: 0
      },
      changeDelay
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
  .brand
    @include xy-grid
    @include flex-align ($y: middle)
    max-width: 1210px

    .logo
      @include xy-cell (shrink)
      @include size (55px)

    .name
      @include xy-cell (shrink)
      font: bold 24px $logo-font-family
</style>
