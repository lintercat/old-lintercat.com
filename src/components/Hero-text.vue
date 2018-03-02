<template lang='pug'>
  .hero-text
    .title Impulsamos tu negocio
    .sub-title Llevándolo a la nube
</template>

<style lang='scss' scoped>
.hero-text {
  .title {
    line-height: 1.125;
    font-family: 'Caviar Dreams', $body-font-family;
    text-transform: uppercase;
    letter-spacing: -1px;

    @include breakpoint(small) {
      font-size: 12vw;
    }

    @include breakpoint(large) {
      font-size: 4.5em;
      letter-spacing: -1px;
      line-height: 90px;
    }
  }

  .sub-title {
    line-height: 1;
    font-family: 'Satisfy', $body-font-family;
    text-transform: lowercase;
    letter-spacing: 0.4px;

    @include breakpoint(small) {
      font-size: 8vw;
    }

    @include breakpoint(large) {
      font-size: 5.625em;
    }
  }
}
</style>
