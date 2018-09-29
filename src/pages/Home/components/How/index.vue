<template lang='pug'>
  .how
    .content-wrapper
      subheadline {{ $t('how.subheadline') }}
      headline {{ $t('how.headline') }}
</template>

<script>
import headline from '@/global/components/headline'
import subheadline from '@/global/components/subheadline'

export default {
  components: {
    headline,
    subheadline
  }
}
</script>

<style lang='sass'>
  .how
    position: relative
    width: 100%
    height: 50vh
    margin-top: 135px
    background-color: from-palette(ghost-white)

    &::before
      display: block
      width: 100%
      height: 135px
      content: ' '
      position: absolute
      top: -135px
      left: 0
      background-image: url('./images/background.svg')
      background-size: 100% auto
      background-position: center bottom
      background-repeat: no-repeat

  .content-wrapper
    transform: translateY(-40px)
</style>
