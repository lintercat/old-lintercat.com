<template lang='pug'>
  .lead-form
    .long-text.form-entry
      label(for='lead-name') Nombre
      input(type='text' v-model='lead.name' id='lead-name')
    .short-text.form-entry
      label(for='lead-company') Empresa
      input(type='text' v-model='lead.company' id='lead-company')
    .short-text.form-entry
      label(for='lead-email') Email
      input(type='text' v-model='lead.email' id='lead-email')
    .large-text.form-entry
      label(for='lead-message') ¿Cómo podemos ayudarte?
      textarea(v-model='lead.message' rows='3' id='lead-message')
    .form-control
      button(@click='submit' :class='{shake: hasError}') ¡Comencémos!
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      lead: {
        name: '',
        company: '',
        email: '',
        message: '',
        createdAt: Date.now()
      },
      hasError: false
    }
  },

  methods: {
    submit () {
      const target = process.env.PROSPECTS_API_URL
      if (this.lead.name && this.lead.company && this.lead.email) {
        axios.post(target, this.lead)
          .then(response => {
            this.$swal({
              title: 'Gracias por contactarnos',
              text: 'Nos comunicaremos contigo lo más pronto posible',
              type: 'success'
            })
          })
          .catch(() => { this.hasError = true })
      } else {
        this.hasError = true
      }
      setTimeout(() => { this.hasError = false }, 820)
    }
  }
}
</script>

<style lang='scss' scoped>
.lead-form {
  @extend %edge-bleeded;
  @include xy-grid;
  @include flex-align($x: justify, $y: middle);

  @include breakpoint(medium) {
    max-width: $base-spacing * 120;
    margin-left: auto;
    margin-right: auto;
  }

  .short-text,
  .long-text,
  .large-text,
  .form-control {
    @include xy-cell(1 of 1);
  }

  .short-text {
    @include breakpoint(medium) {
      @include xy-cell(1 of 2);
    }
  }

  label,
  input,
  textarea {
    width: 100%;
  }

  .shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  button {
    @include button($expand: true);
    margin-top: 15px;
    padding: 8px 0;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
}
</style>
