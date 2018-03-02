<template lang='pug'>
  .mission-content
    .mission-text
      p En Lintercat, creamos experiencias que transforman marcas, crecen negocios y mejoran la vida de las personas.
      p Acompáñanos en el camino de diseñar juntos la primera impresión que los clientes tendrán de tu empresa.
    img.mission-image(src='~/assets/images/hands-up-decorated-picture@3x.png')
</template>

<style lang='scss' scoped>
@import '~assets/style/unsemantic';

.mission-content {
  @extend %edge-bleeded-left;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  .mission-text {
    display: inline-block;

    @include breakpoint(small) {
      width: mobile-vw(174px);
    }

    @include breakpoint(large) {
      width: 390px;
    }
  }

  .mission-text p {
    @include breakpoint(small) {
      font-size: 0.875em;
      line-height: 1.285;
    }

    @include breakpoint(large) {
      font-size: 1.5em;
      margin-bottom: 40px;
    }
  }

  .mission-image {
    float: right;

    @include breakpoint(small) {
      width: mobile-vw(221px);
      margin-top: mobile-vw(-15px);
      margin-right: mobile-vw(-50px);
    }

    @include breakpoint(large) {
      width: 454px;
      margin-top: -100px;
      margin-right: 0;
    }
  }
}
</style>
