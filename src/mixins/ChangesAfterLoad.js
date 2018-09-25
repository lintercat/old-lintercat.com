
const ChangesAfterLoad = {
  methods: {
    change () {}
  },

  mounted () {
    window.addEventListener('load', () => {
      if (this.changeDelay) {
        setTimeout(this.change, this.changeDelay)
      } else {
        this.change()
      }
    })
  }
}

export default ChangesAfterLoad
