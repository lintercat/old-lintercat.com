<template lang='pug'>
  .hero
    TopBar
    .first.phrase {{ $t('hero.title') }}
    .second.phrase {{ $t('hero.subtitle') }}
    Clouds
</template>

<script>
import TopBar from './TopBar'
import Clouds from './Clouds'

export default {
  components: {
    TopBar,
    Clouds
  }
}
</script>

<style scoped lang='sass'>
  .hero
    position: relative
    text-align: center
    background-image: url('./images/background.svg')
    background-size: cover
    background-position: center bottom
    background-repeat: no-repeat
    color: from-palette(white)

    .phrase
      &.first
        letter-spacing: -1.35px
        font: 600 90px/1.2 $header-font-family
        text-transform: uppercase

      &.second
        padding-bottom: 150px
        letter-spacing: -1.1px
        font: 400 90px/1 'Satisfy', $header-font-family
</style>
