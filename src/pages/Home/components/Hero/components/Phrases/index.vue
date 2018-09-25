<template lang='pug'>
  .phrases
    Title
    Subtitle
</template>

<script>
import Title from './components/Title'
import Subtitle from './components/Subtitle'

export default {
  components: {
    Title,
    Subtitle
  }
}
</script>

<style lang='sass'>
  .phrases
    position: absolute
    top: 55%
    left: 50%
    transform: translate(-50%, -50%)
</style>
