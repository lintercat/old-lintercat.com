<template lang='pug'>
  .hero-text
    motion(:values='titleStyles' :spring='spring')
      template(slot-scope='_titleStyles')
        .title(:style='{ transform: `scale(${ _titleStyles.scale })`, opacity: _titleStyles.opacity }')
          | Impulsamos tu negocio
    motion(:values='subTitleStyles' :spring='spring')
      template(slot-scope='_subTitleStyles')
        .sub-title(:style='{ transform: `scale(${ _subTitleStyles.scale })`, opacity: _subTitleStyles.opacity }')
          | Llevándolo a la nube
</template>

<script>
export default {
  data () {
    return {
      spring: {
        stiffness: 120,
        damping: 10,
        precision: 0.01
      },
      titleStyles: {
        scale: 0.9,
        opacity: 0
      },
      subTitleStyles: {
        scale: 0.9,
        opacity: 0
      }
    }
  },

  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.titleStyles = {
          scale: 1,
          opacity: 1
        }
      }, 400)

      setTimeout(() => {
        this.subTitleStyles = {
          scale: 1,
          opacity: 1
        }
      }, 1100)
    })
  }
}
</script>

<style lang='scss' scoped>
.hero-text {
  position: absolute;
  width: 100%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  box-sizing: border-box;

  @include breakpoint(small) {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  .title,
  .sub-title {
    cursor: default;
  }

  .title {
    line-height: 1.125;
    font-family: 'Caviar Dreams', $body-font-family;
    text-transform: uppercase;
    letter-spacing: -1px;

    @include breakpoint(small) {
      font-size: 12vw;
    }

    @include breakpoint(large) {
      font-size: 4.5em;
      letter-spacing: -1px;
      line-height: 90px;
    }
  }

  .sub-title {
    line-height: 1;
    font-family: 'Satisfy', $body-font-family;
    text-transform: lowercase;
    letter-spacing: 0.4px;

    @include breakpoint(small) {
      font-size: 9.5vw;
    }

    @include breakpoint(large) {
      font-size: 5.625em;
    }
  }
}
</style>
