<template lang="pug">
  .footing
    .footing-copyrights
      | &copy; {{ currentYear }}
      .footing-logo
    .footing-links
      a(href='#') Privacidad
</template>

<script>
export default {
  data () {
    return {
      currentYear: (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footing {
  @include breakpoint(small) {
    margin-top: mobile-vw(80px);
    padding: mobile-vw(26px) mobile-vw(36px);
  }

  @include breakpoint(large) {
    width: 720px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 60px 0;
  }

  .footing-copyrights {
    display: inline-block;

    .footing-logo {
      display: inline-block;
      vertical-align: bottom;
      width: 18px;
      height: 18px;
      margin-left: 5px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(~assets/images/logo.svg);
    }
  }

  .footing-links {
    float: right;

    a {
      color: white;
    }
  }
}
</style>
