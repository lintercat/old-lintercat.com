<template lang='pug'>
  .products-list
    ul
      li Páginas promocionales
      li Marketing digital
      li Páginas a la medida
      li Páneles administrativos
      li Aplicaciones móviles
</template>

<style lang='scss'>
.products-list {
  @include breakpoint(small) {
    margin-bottom: 110px;
  }

  @include breakpoint(large) {
    margin-bottom: 300px;
  }

  text-align: center;

  ul {
    margin: 0;
  }

  li {
    display: block;
    font-weight: 600;

    @include breakpoint(small) {
      font-size: mobile-vw(28px);
      line-height: mobile-vw(42px);
    }

    @include breakpoint(large) {
      font-size: 48px;
      line-height: 92px;
    }
  }
}
</style>
