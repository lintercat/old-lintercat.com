<template lang='pug'>
  .hero-clouds
    .cloud.left
    .cloud.second-left
    .cloud.right
</template>

<style lang='scss' scoped>
.hero-clouds .cloud {
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;

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
    left: 120px;
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
      bottom: 14vw;
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
