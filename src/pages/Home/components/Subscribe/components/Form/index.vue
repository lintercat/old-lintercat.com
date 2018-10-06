<template lang='pug'>
  .subscribe-form(data-cy='title')
    .subscribe-form__error-label(
      data-cy='error-label'
      v-show='shouldShowErrorLabel'
    ) Please enter a valid email

    input.subscribe-form__name-input(
      data-cy='name-input'
      v-model='name'
    )

    input.subscribe-form__email-input(
      data-cy='email-input'
      v-model='email'
    )

    input.subscribe-form__submit-button(
      data-cy='subscribe-button'
      type='submit'
      :value='buttonText'
      :disabled='shouldDisableSubmitButton'
      @click='onSubmit'
    )
</template>

<script>
import validateEmail from './validateEmail'

export default {
  props: {
    buttonText: {
      type: String,
      default: 'Subscribe'
    }
  },

  data () {
    return {
      email: '',
      name: ''
    }
  },

  computed: {
    isValidEmail () {
      return validateEmail(this.email)
    },

    shouldShowErrorLabel () {
      return this.email.length > 3 && !this.isValidEmail
    },

    shouldDisableSubmitButton () {
      return this.email.length < 4 || !this.isValidEmail
    }
  },

  methods: {
    onSubmit () {
      const { name, email } = this
      this.$emit('submit', { name, email })
    }
  }
}
</script>
