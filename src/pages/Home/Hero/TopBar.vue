<template lang='pug'>
  .top-bar
    img.logo(src='~@/global/images/logo.svg')
    .brand {{ $t('hero.topBar.brand') }}
</template>

<style scoped lang='sass'>
  .top-bar
    @include xy-grid
    @include flex-align ($y: middle)
    max-width: 1210px
    margin: 0 auto
    padding: 25px 115px 75px

    .logo
      @include xy-cell (shrink)
      @include size (55px)

    .brand
      @include xy-cell (shrink)
      font: bold 24px $header-font-family
</style>
