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
@import '~assets/style/gradients';

.hero {
  @extend %bluish-gradiented;

  position: relative;
  text-align: center;
  color: from-palette(white);

  @include breakpoint(small) {
    padding-left: 10vw;
    padding-right: 10vw;
    padding-bottom: 45vw;
  }

  @include breakpoint(medium) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 195px;
  }
}
</style>
