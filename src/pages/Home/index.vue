<template lang='pug'>
  .home
    hero
    about
</template>

<script>
import Hero from './components/Hero'
import About from './components/About'

export default {
  components: {
    Hero,
    About
  }
}
</script>
