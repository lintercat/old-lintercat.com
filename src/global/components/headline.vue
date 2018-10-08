<template lang='pug'>
  .headline(:class='theme')
    slot
</template>

<script>
import themed from '@/mixins/themed'

export default {
  mixins: [
    themed
  ]
}
</script>

<style scoped lang='sass'>
  .headline
    text-align: center
    font: 900 60px/1 $header-font-family
    text-transform: uppercase

    &.dark
      color: from-palette(rhino)

    &.light
      color: from-palette(white)
</style>
