<template lang='pug'>
  .top-bar
    .brand
      .logo
    a.contact-button(v-scroll-to="'.contact-header'") Contáctanos
</template>

<style lang='scss' scoped>
.top-bar {
  @include xy-grid;
  @include xy-gutters($negative: true);
  @include flex-align($x: justify, $y: middle);

  @include breakpoint(small) {
    padding-top: 7vw;
    margin-bottom: 16vw;// ($base-spacing * 19);
  }

  @include breakpoint(large) {
    padding-top: 33px;
    max-width: 930px;
    margin: 0 auto 125px;
  }

  .brand,
  .contact-button {
    display: inline-block;
  }

  .brand .logo {
    @include xy-cell(shrink);

    @include breakpoint(small) {
      width: 14vw;
      height: 14vw;
    }

    @include breakpoint(large) {
      width: 56px;
      height: 56px;
    }

    background-size: contain;
    background-position: center;
    background-image: url(~assets/images/logo.svg);
    background-repeat: no-repeat;
  }

  .contact-button {
    @include xy-cell(shrink);

    vertical-align: baseline;
    background-color: from-palette(white);
    color: from-palette(navy-blue);
    border-radius: $global-radius;
    box-shadow: 0 0 16px hsl(208, 50%, 47%);

    &:hover {
      box-shadow: 0 0 8px hsl(208, 50%, 47%);;
    }

    &:active {
      box-shadow: none;
    }

    @include breakpoint(small) {
      font-size: 3.5vw;
      padding: 2vw 5vw;
    }

    @include breakpoint(small) {
      font-size: 0.875em;
      padding: 4px 11px;
    }
  }
}
</style>
