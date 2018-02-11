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

  margin-bottom: mobile-vw(17px);
  font-family: 'Open Sans Condensed', $body-font-family;
  font-weight: bold;
  text-transform: uppercase;
  color: from-palette(fuscous-gray);

  .mission-pretitle {
    font-size: 0.875em;
  }

  .mission-header-separator {
    @extend %header-separator;

    background-color: from-palette(turquoise-blue);
  }

  .mission-title {
    font-size: 1.125em;
  }
}
</style>
