<template lang='pug'>
  .top-bar
    .brand
      .logo
    .contact-button Contáctanos
</template>

<style lang='scss' scoped>
$logo-size: 14vw;

.top-bar {
  @include xy-grid;
  @include xy-gutters($negative: true);
  @include flex-align($x: justify, $y: middle);
  padding-top: 7vw;
  margin-bottom: 16vw;// ($base-spacing * 19);

  .brand,
  .contact-button {
    display: inline-block;
  }

  .brand .logo {
    @include xy-cell(shrink);

    width: $logo-size;
    height: $logo-size;
    background-size: contain;
    background-position: center;
    background-image: url(~assets/images/logo.svg);
    background-repeat: no-repeat;
  }

  .contact-button {
    @include xy-cell(shrink);

    font-size: 3.5vw;
    vertical-align: baseline;
    padding: 2vw 5vw;
    background-color: from-palette(white);
    color: from-palette(navy-blue);
    border-radius: $global-radius;
    box-shadow: 0 0 16px hsl(208, 50%, 47%);
  }
}
</style>
