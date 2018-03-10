<template lang='pug'>
  .ocean
    .habitat
    slot
</template>

<style lang='scss'>
.ocean {
  position: relative;
  background-image: url(~assets/images/bottom-background.svg);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  color: from-palette(white);

  .habitat {
    position: absolute;
    z-index: -1;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    background-image: url(~assets/images/habitat.svg);
    background-size: 100% auto;
    background-position: top center;
    background-repeat: no-repeat;
  }
}
</style>
