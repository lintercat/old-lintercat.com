<template lang='pug'>
  #app
    hero
    mission
    ocean
      products
      contact
      footing
</template>

<script>
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footing from '@/components/Footing'

import ocean from '@/components/ocean'

export default {
  components: {
    Hero,
    Mission,
    Products,
    ocean,
    Contact,
    Footing
  }
}
</script>

<style lang='scss'>
@import 'app';
</style>
