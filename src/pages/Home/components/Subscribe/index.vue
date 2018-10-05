<template lang='pug'>
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
  .subscribe-form
    &__error-label
      color: red
</style>
