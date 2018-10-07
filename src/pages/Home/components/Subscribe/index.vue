<template lang='pug'>
  .subscribe
    Form(@submit='onSubmit')
</template>

<script>
import Form from './components/Form'

export default {
  components: {
    Form
  },

  methods: {
    onSubmit ({ name, email }) {
      console.log(name, email)
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
</style>
