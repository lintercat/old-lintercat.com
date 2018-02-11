<template lang='pug'>
  .contact-header
    .contact-title Anímate a dar el primer paso
    .contact-subtitle ¿Entusiasmado con un proyecto y crees que podemos ayudarte? ¡Cuéntanos!
</template>

<style lang='scss'>
.contact-header {
  text-align: center;

  @include breakpoint(small) {
    margin-bottom: mobile-vw(42px);
  }

  .contact-title {
    font-family: 'Open Sans Condensed', $body-font-family;
    text-transform: uppercase;
    font-weight: bold;

    @include breakpoint(small) {
      font-size: mobile-vw(18px);
    }
  }

  .contact-subtitle {
    opacity: 0.8;

    @include breakpoint(small) {
      padding: 0 mobile-vw(18px);
    }
  }
}
</style>
