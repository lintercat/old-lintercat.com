<template lang='pug'>
  .phrases
    .first.phrase {{ $t('hero.title') }}
    .second.phrase {{ $t('hero.subtitle') }}
</template>

<style lang='sass'>
  .phrases
    position: absolute
    top: 55%
    left: 50%
    transform: translate(-50%, -50%)

  .first.phrase
    letter-spacing: -1.35px
    font: 600 90px/1.2 $header-font-family
    text-transform: uppercase

  .second.phrase
    padding-bottom: 150px
    letter-spacing: -1.1px
    font: 400 90px/1 'Satisfy', $header-font-family
</style>
