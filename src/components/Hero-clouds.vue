<template lang='pug'>
  .hero-clouds
    .cloud.left(:class='{ animate }')
    .cloud.second-left(:class='{ animate }')
    .cloud.right(:class='{ animate }')
</template>

<script>
export default {
  data () {
    return {
      animate: false
    }
  },

  mounted () {
    window.addEventListener('load', () => {
      this.animate = true
    })
  }
}
</script>

<style lang='scss' scoped>
.hero-clouds .cloud {
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;

  &.left,
  &.second-left {
    transform: translateX(-100%);
  }

  &.right {
    transform: translateX(100%);
  }

  &.animate {
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.01,.4,.33,.99); // ease-out;
    animation-duration: 450ms;
    animation-delay: 2s;

    &.left {
      animation-name: hero-cloud-left-entrance-animation;
    }

    &.second-left {
      animation-name: hero-cloud-second-left-entrance-animation;
    }

    &.right {
      animation-name: hero-cloud-right-entrance-animation;
    }
  }

  &.left {
    left: 0;
    background-image: url(~assets/images/cloud-left.svg);
    background-position-x: left;

    @include breakpoint(small) {
      bottom: 10vw;
      width: 27vw;
      height: 27vw;
    }

    @include breakpoint(large) {
      bottom: 126px;
      width: 145px;
      height: 122px;
    }
  }

  &.second-left {
    @include show-for(large);
    background-image: url(~assets/images/cloud-second-left.svg);
    background-position-x: left;
    bottom: 236px;
    width: 105px;
    height: 92px;
  }

  &.right {
    right: 0;
    background-image: url(~assets/images/cloud-right.svg);
    background-position-x: right;

    @include breakpoint(small) {
      bottom: 4vw;
      width: 34vw;
      height: 34vw;
    }

    @include breakpoint(large) {
      bottom: 124px;
      width: 158px;
      height: 119px;
    }
  }
}
</style>
