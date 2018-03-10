<template lang='pug'>
  .contact
    contact-header
    contact-form
</template>

<script>
import ContactHeader from '@/components/Contact-header'
import ContactForm from '@/components/Contact-form'

export default {
  components: {
    ContactHeader,
    ContactForm
  }
}
</script>

<style lang='scss'>
  .contact {
    position: relative;
    z-index: 2;
  }
</style>
