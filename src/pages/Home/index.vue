<template lang='pug'>
  .home
    Hero
    About
    How
    Subscribe
</template>

<script>
import Hero from './components/Hero'
import About from './components/About'
import How from './components/How'
import Subscribe from './components/Subscribe'

export default {
  components: {
    Hero,
    About,
    How,
    Subscribe
  }
}
</script>
