<template lang='pug'>
.hero
  TopBar
  .first.phrase {{ $t('hero.title') }}
  .second.phrase {{ $t('hero.subtitle') }}
</template>

<script>
import TopBar from './TopBar'

export default {
  components: {
    TopBar
  }
}
</script>

<style scoped lang='sass'>
.hero
  width: 100%
  height: 57vh
  background-image: url('./images/background.svg')
  background-size: cover
  background-position: center bottom
  background-repeat: no-repeat
</style>
