<template lang='pug'>
  .subscribe
    .decorators
    .content-wrapper
      subheadline(theme='light') {{ $t('contact.subheadline') }}
      headline(theme='light') {{ $t('contact.headline') }}
      Form(@submit='subscribe')
</template>

<script>
import headline from '@/global/components/headline'
import subheadline from '@/global/components/subheadline'
import Form from './components/Form'
import addLead from './functions/addLead'

export default {
  components: {
    headline,
    subheadline,
    Form
  },

  methods: {
    subscribe (lead) {
      if (addLead(lead)) alert('Your message was sent successfully')
      else alert('Sorry, we could not send your message')
    }
  }
}
</script>

<style scoped lang='sass'>
  .subscribe
    @include top-curve-background ($color: from-palette(dodger-blue))
    width: 100%
    margin-top: -135px

  .content-wrapper
    transform: translateY(-40px)

  .decorators
    position: absolute
    width: 80%
    height: 80%
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background-image: url('./images/decorators.svg')
    background-repeat: no-repeat
    background-position: center center
    background-size: contain
</style>
