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
      button(@click='submit') ¡Comencémos!
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
      }
    }
  },

  methods: {
    submit () {
      const target = process.env.PROSPECTS_API_URL
      axios.post(target, this.lead)
        .then(response => { console.log(response) })
        .catch(error => { console.error(error) })
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

  button {
    @include button($expand: true);
    margin-top: 15px;
    padding: 8px 0;
  }
}
</style>
