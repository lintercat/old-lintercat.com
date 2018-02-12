<template>
  <div class="row align-center">
    <div class="small-11 medium-6 large-5 column footer-contact-form small-centered">
      <span>{{ errors.all() }}</span>
    </div>

    <div class="small-11 medium-6 large-5 column footer-contact-form small-centered">
      <form id="leadForm" class="hide-me">
        <div class="row">
          <div class="small-12 column">
            <label for="leadName">Nombre</label>
            <input  type="text"
                    required=""
                    id="leadName"
                    v-model="leadName"
                    tabindex="3">
          </div>
          <div class="small-6 column">
            <label for="leadCompany">Empresa</label>
            <input  type="text"
                    required=""
                    id="leadCompany"
                    v-model="leadCompany"
                    tabindex="4">
          </div>
          <div class="small-6 column">
            <label for="leadEmail">Email</label>
            <input  type="email"
                    required=""
                    v-validate="'required|email'"
                    id="leadEmail"
                    v-model="leadEmail"
                    tabindex="5">
          </div>
          <div class="small-12 column">
            <label for="fieldName">¿Cómo podemos ayudarte?</label>
            <input  type="text"
                    id="leadMessage"
                    v-model="leadMessage"
                    tabindex="6">
          </div>
          <div class="small-12 column form-contact-form-button">
            <button id="beamButton"
                    class="primary expanded light large button beam-button"
                    @click="send"
                    tabindex="6">
              ¡Comencemos!
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      leadName: '',
      leadCompany: '',
      leadEmail: '',
      leadMessage: ''
    }
  },
  methods: {
    send () {
      this.axios.post('https://lintercat-landing.firebaseio.com/public/prospects.json', {
        name: this.leadName,
        company: this.leadCompany,
        email: this.leadEmail,
        message: this.leadMessage
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
