<template lang='pug'>
  .form
    .name.group
      label.label Name
      input.name.input(
        data-cy='name-input'
        v-model='form.name'
      )

    .email.group
      label.label Email
      input.email.input(
        data-cy='email-input'
        v-model='form.email'
      )

    .controls.group
      button.subcribe.button(
        data-cy='subscribe-button'
        :disabled='shouldDisableSubmitButton'
        @click='onSubmit'
      ) Start!
</template>

<script>
import validateEmail from './validateEmail'

export default {
  data () {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },

  computed: {
    isValidEmail () {
      return validateEmail(this.form.email)
    },

    shouldDisableSubmitButton () {
      return this.form.email.length < 4 || !this.isValidEmail
    }
  },

  methods: {
    onSubmit () {
      this.$emit('submit', this.form)
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style scoped lang='sass'>
  .form
    padding: 180px 0

  .group
    @include xy-grid
    @include flex-align ($x: center)
    max-width: 380px
    margin: 0 auto 10px

  .label,
  .button,
  .input
    font: 600 18px/1 $body-font-family
    color: from-palette(white)

  .label
    @include xy-cell (full)
    margin-bottom: 5px

  .input
    @include xy-cell (full)
    padding: 6px 11px
    font-weight: 400
    border: none
    border-radius: 3px
    background-color: rgba(from-palette(white), 0.1)
    outline-color: from-palette(true-blue)

  .button
    width: 100%
    border: none
    border-radius: 3px
    margin-top: 25px
    padding: 10px 0
    background-color: from-palette(true-blue)
    box-shadow: 0px 4px 2px rgba(from-palette(black), 0.05)
    opacity: 1
    transition: opacity 0.3s

    &:disabled
      opacity: 0.3
</style>
