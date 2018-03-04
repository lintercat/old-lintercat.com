<template lang='pug'>
  .hero
    top-bar
    hero-text
    hero-clouds
</template>

<script>
import TopBar from '@/components/Top-bar'
import HeroText from '@/components/Hero-text'
import HeroClouds from '@/components/Hero-clouds'

export default {
  components: {
    TopBar,
    HeroText,
    HeroClouds
  }
}
</script>

<style lang='scss' scoped>
.hero {
  position: relative;
  text-align: center;
  background-image: url(~assets/images/hero-background.svg);
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  color: from-palette(white);

  @include breakpoint(small) {
    padding-left: 10vw;
    padding-right: 10vw;
    padding-bottom: 45vw;
  }

  @include breakpoint(large) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 195px;
  }
}
</style>
