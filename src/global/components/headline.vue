<template lang='pug'>
  .headline
    slot
</template>

<style scoped lang='sass'>
  .headline
    text-align: center
    font: 900 60px/1 $header-font-family
    text-transform: uppercase
    color: from-palette(rhino)
</style>
