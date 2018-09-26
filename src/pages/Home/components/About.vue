<template lang='pug'>
  .about
    subheadline
      | {{ $t('about.subheadline') }}
    headline
      | {{ $t('about.headline') }}
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
  .about
    padding-top: 95px
</style>
