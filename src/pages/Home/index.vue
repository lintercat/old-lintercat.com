<template lang='pug'>
  .home
    hero
    about
    how
</template>

<script>
import Hero from './components/Hero'
import About from './components/About'
import How from './components/How'

export default {
  components: {
    Hero,
    About,
    How
  }
}
</script>
