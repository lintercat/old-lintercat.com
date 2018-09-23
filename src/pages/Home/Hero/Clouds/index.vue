<template lang='pug'>
  .clouds
    .left.cloud
    .top.right.cloud
    .bottom.right.cloud
</template>

<style lang='sass'>
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

    &.right
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
      right: 100px
      bottom: 150px
      background-image: url('./images/cloudTopRight.svg')

    &.bottom.right
      width: 100px
      height: 112px
      right: 0
      bottom: 100px
      background-image: url('./images/cloudBottomRight.svg')
</style>
