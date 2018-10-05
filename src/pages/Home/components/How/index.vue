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
    @include top-curve-background ($color: from-palette(ghost-white))
    width: 100%
    height: 50vh
    margin-top: 135px
    padding-bottom: 135px

  .content-wrapper
    transform: translateY(-40px)
</style>
