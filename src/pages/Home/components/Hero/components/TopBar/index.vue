<template lang='pug'>
  .top-bar
    Brand
</template>

<script>
import Brand from './Brand'

export default {
  components: {
    Brand
  }
}
</script>

<style scoped lang='sass'>
  .top-bar
    @include xy-grid
    max-width: 1210px
    margin: 0 auto
    padding-top: 25px
    padding-left: 115px
</style>
