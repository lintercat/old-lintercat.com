<template lang='pug'>
  .products-header
    .products-title ¿Qué puede hacer lintercat por tí?
    .products-subtitle Amamos desarrollar productos digitales y servicios integrados para llevar tu empresa a la nube.
</template>

<style lang='scss'>
.products-header {
  text-align: center;

  @include breakpoint(small) {
    padding-top: mobile-vw(60px);
    margin-bottom: mobile-vw(42px);
  }

  .products-title {
    font-family: 'Open Sans Condensed', $body-font-family;
    text-transform: uppercase;
    font-weight: bold;

    @include breakpoint(small) {
      font-size: mobile-vw(18px);
    }
  }

  .products-subtitle {
    opacity: 0.8;

    @include breakpoint(small) {
      padding: 0 mobile-vw(18px);
    }
  }
}
</style>
