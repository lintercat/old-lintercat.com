<template lang='pug'>
  .contact-header
    .contact-title Anímate a dar el primer paso
    .contact-subtitle Cuéntanos sobre ese proyecto que te entusiasma tanto
</template>

<style lang='scss'>
.contact-header {
  text-align: center;

  @include breakpoint(small) {
    margin-bottom: mobile-vw(42px);
  }

  @include breakpoint(large) {
    margin-bottom: 135px;
  }

  .contact-title {
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

  .contact-subtitle {
    opacity: 0.8;

    @include breakpoint(small) {
      padding: 0 mobile-vw(18px);
    }

    @include breakpoint(large) {
      width: 800px;
      padding: 0;
      margin: 0 auto;
      font-size: 32px;
    }
  }
}
</style>
