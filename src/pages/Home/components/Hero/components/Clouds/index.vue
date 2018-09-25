<template lang='pug'>
  .clouds(:class='{ animate }')
    .left.cloud
    .top.right.cloud
    .bottom.right.cloud
</template>

<script>
import ChangesAfterLoad from '@/mixins/ChangesAfterLoad'

export default {
  mixins: [ChangesAfterLoad],

  data () {
    return {
      animate: false
    }
  },

  methods: {
    change () {
      this.animate = true
    }
  }
}
</script>

<style scoped lang='sass'>
  @import 'sass/animations'

  .clouds.animate
    .cloud
      animation-fill-mode: forwards
      animation-timing-function: cubic-bezier(.01, .4, .33, .99)
      animation-duration: 450ms
      animation-delay: 2s

    .left.cloud
      animation-name: hero-cloud-left-entrance-animation

    .top.right.cloud
      animation-name: hero-cloud-top-right-entrance-animation

    .bottom.right.cloud
      animation-name: hero-cloud-bottom-right-entrance-animation

  .clouds
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0

  .cloud
    position: absolute
    background-repeat: no-repeat
    background-size: contain
    background-position-y: center
    opacity: 0.7

    &.left
      transform: translateX(-100%)

    &.right
      transform: translateX(100%)
      background-position: right center

    &.left
      width: 115px
      height: 182px
      left: 0
      bottom: 70px
      background-image: url('./images/cloudLeft.svg')

    &.top.right
      width: 131px
      height: 131px
      right: 0
      bottom: 150px
      background-image: url('./images/cloudTopRight.svg')

    &.bottom.right
      width: 100px
      height: 112px
      right: 0
      bottom: 100px
      background-image: url('./images/cloudBottomRight.svg')
</style>
