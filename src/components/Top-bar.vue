<template lang='pug'>
  .top-bar
    motion(:values='brandStyles' :spring='spring')
      template(slot-scope='_brandStyles')
        .brand(:style='{ transform: `scale(${ _brandStyles.scale })`, opacity: _brandStyles.opacity }')
          .logo
          .name Lintercat
    motion(:values='contactButtonStyles' :spring='spring')
      template(slot-scope='_contactButtonStyles')
        a.contact-button(
          v-scroll-to="'.contact-header'"
          :style='{ transform: `scale(${ _contactButtonStyles.scale })`, opacity: _contactButtonStyles.opacity }'
        ) Contáctanos
</template>

<script>
export default {
  data () {
    return {
      spring: {
        stiffness: 40,
        damping: 5,
        precision: 0.01
      },
      brandStyles: {
        scale: 0.8,
        opacity: 0
      },
      contactButtonStyles: {
        scale: 1,
        opacity: 0
      }
    }
  },

  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.brandStyles = {
          scale: 1,
          opacity: 1
        }

        this.contactButtonStyles = {
          scale: 1,
          opacity: 1
        }
      }, 1900)
    })
  }
}
</script>

<style lang='scss' scoped>
.top-bar {
  @include xy-grid;
  @include xy-gutters($negative: true);
  @include flex-align($x: justify, $y: middle);

  @include breakpoint(small) {
    padding-top: 7vw;
  }

  @include breakpoint(large) {
    padding-top: 33px;
    max-width: 930px;
    margin: 0 auto;
  }

  .brand,
  .contact-button {
    display: inline-block;
  }

  .brand .logo {
    @include xy-cell(shrink);
    display: inline-block;

    @include breakpoint(small) {
      width: 14vw;
      height: 14vw;
    }

    @include breakpoint(large) {
      width: 56px;
      height: 56px;
    }

    background-size: contain;
    background-position: center;
    background-image: url(~assets/images/logo.svg);
    background-repeat: no-repeat;
  }

  .brand .name {
    @include xy-cell(shrink);
    @include show-for(large);
    display: inline-block;
    font-size: 22px;
    line-height: 56px;
    vertical-align: top;
    text-transform: uppercase;
    cursor: default;
  }

  .contact-button {
    @include xy-cell(shrink);

    vertical-align: baseline;
    border: 1px solid from-palette(white);
    color: from-palette(white);
    border-radius: $global-radius;
    text-transform: uppercase;

    @include breakpoint(small) {
      font-size: 3.5vw;
      padding: 2vw 5vw;
    }

    @include breakpoint(large) {
      font-size: 0.875em;
      padding: 4px 20px;
    }

    &:hover {
      box-shadow: 0 0 8px hsl(208, 50%, 47%);;
    }

    &:active {
      box-shadow: none;
    }
  }
}
</style>
