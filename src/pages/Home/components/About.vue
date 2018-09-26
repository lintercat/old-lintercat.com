<template lang='pug'>
  .about
    subheadline {{ $t('about.subheadline') }}
    headline {{ $t('about.headline') }}
    .text(v-html=`$t('about.text')`)
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

<style scoped lang='sass'>
  .about
    padding-top: 95px

  .text
    width: 780px
    padding-top: 30px
    margin: 0 auto
    text-align: center
    font: 400 24px/1.5 $body-font-family
    letter-spacing: -0.25px
    color: from-palette(rhino)
</style>
