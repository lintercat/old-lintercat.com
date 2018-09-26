<template lang='pug'>
  .subheadline
    slot
</template>

<style scoped lang='sass'>
  .subheadline
    text-align: center
    font: bold 24px/1 $body-font-family
    text-transform: uppercase
    color: from-palette(loblolly)
</style>
