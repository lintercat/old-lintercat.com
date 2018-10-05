<template lang='pug'>
  .subscribe
    SubscribeForm(@submit='onSubmit')
</template>

<script>
import SubscribeForm from './components/SubscribeForm'

export default {
  components: {
    SubscribeForm
  },

  methods: {
    onSubmit () {
      this.$router.push({ name: 'root' })
    }
  }
}
</script>

<style scoped lang='sass'>
  .subscribe
    @include top-curve-background ($color: from-palette(dodger-blue))
    width: 100%
    height: 50vh
    margin-top: -135px

  .subscribe-form
    &__error-label
      color: red
</style>
