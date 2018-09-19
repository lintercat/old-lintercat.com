<template lang='pug'>
  .home
    hero(msg='Welcome to Your Vue.js App')
</template>

<script>
import Hero from '@/components/Hero'

export default {
  name: 'home',

  components: {
    Hero
  }
}
</script>
