<template lang='pug'>
  .mission-header
    .mission-pretitle Nos encanta
    .mission-header-separator
    .mission-title Diseñar experiencias digitales
</template>

<style lang='scss' scoped>
@import '~assets/style/unsemantic';

.mission-header {
  @extend %edge-bleeded;

  font-family: 'Open Sans Condensed', $body-font-family;
  font-weight: bold;
  text-transform: uppercase;
  color: from-palette(fuscous-gray);

  @include breakpoint(small) {
    margin-bottom: mobile-vw(17px);
  }

  @include breakpoint(large) {
    margin-bottom: 33px;
  }

  .mission-pretitle {
    @include breakpoint(small) {
      font-size: 0.875em;
    }

    @include breakpoint(large) {
      font-size: 1.125em;
    }
  }

  .mission-header-separator {
    @extend %header-separator;

    background-color: from-palette(turquoise-blue);
  }

  .mission-title {
    @include breakpoint(small) {
      font-size: 1.125em;
    }

    @include breakpoint(large) {
      font-size: 1.75em;
    }
  }
}
</style>
