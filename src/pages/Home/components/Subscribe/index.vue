<template lang='pug'>
  .subscribe(:class='{ success }')
    .decorators
    .content-wrapper
      .success-message
        subheadline(theme='light') {{ $t('contact.success.subheadline') }}
        headline(theme='light') {{ $t('contact.success.headline') }}
      .form-wrapper
        subheadline(theme='light') {{ $t('contact.form.subheadline') }}
        headline(theme='light') {{ $t('contact.form.headline') }}
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

  data () {
    return {
      success: false
    }
  },

  methods: {
    subscribe (lead) {
      if (addLead(lead)) {
        this.success = true
      } else {
        alert('Sorry, we could not send your message')
      }
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

  .form-wrapper
    position: relative

  .success-message
    opacity: 0
    position: absolute
    top: 50%
    left: 50%
    width: 100%
    transform: translate(-50%, -60%)
    padding: 50px 0
    transition: transform 0.5s, opacity 1s

  .subscribe.success
    .success-message
      transform: translate(-50%, -50%)
      opacity: 1

    .form-wrapper
      visibility: hidden
</style>
