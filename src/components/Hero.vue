<template lang='pug'>
  motion(:value='bullshit' :spring='spring')
    template(slot-scope='props')
      .hero(:style='{ height: props.value + "px" }')
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
  },

  data () {
    return {
      spring: {
        stiffness: 40,
        damping: 5,
        precision: 0.01
      },
      bullshit: window.innerHeight
    }
  },

  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.bullshit = window.innerHeight * 0.6
      }, 1900)
    })
  }
}
</script>

<style lang='scss' scoped>
.hero {
  overflow: hidden;
  box-sizing: content-box;
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
    padding-bottom: mobile-vw(50px);
  }

  @include breakpoint(large) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 50px;
  }
}
</style>
