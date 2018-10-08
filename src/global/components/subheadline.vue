<template lang='pug'>
  .subheadline(:class='theme')
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
  .subheadline
    text-align: center
    font: bold 24px/1 $body-font-family
    text-transform: uppercase

    &.dark
      color: from-palette(loblolly)

    &.light
      color: from-palette(light-sky-blue)
</style>
