<template lang='pug'>
  .hero
    .first.phrase {{ $t('hero.title') }}
    .second.phrase {{ $t('hero.subtitle') }}
</template>

<style lang='sass'>
  .phrase
    color: red
    @include media-breakpoint-up (md)
      color: blue
</style>
