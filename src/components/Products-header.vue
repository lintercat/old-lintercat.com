<template lang='pug'>
  .products-header
    .products-title ¿Qué puede hacer lintercat por tí?
    .products-subtitle Amamos desarrollar productos digitales y servicios integrados para llevar tu empresa a la nube.
</template>

<style lang='scss'>
.products-header {
  text-align: center;
  cursor: default;

  @include breakpoint(small) {
    padding-top: mobile-vw(60px);
    margin-bottom: mobile-vw(42px);
  }

  @include breakpoint(large) {
    padding-top: 123px;
    margin-bottom: 94px;
  }

  .products-title {
    font-family: 'Open Sans Condensed', $body-font-family;
    text-transform: uppercase;
    font-weight: bold;

    @include breakpoint(small) {
      font-size: mobile-vw(18px);
    }

    @include breakpoint(large) {
      font-size: 58px;
      letter-spacing: -1px;
    }
  }

  .products-subtitle {
    opacity: 0.8;

    @include breakpoint(small) {
      padding: 0 mobile-vw(18px);
    }

    @include breakpoint(large) {
      width: 720px;
      padding: 0;
      margin: 0 auto;
      font-size: 32px;
    }
  }
}
</style>
