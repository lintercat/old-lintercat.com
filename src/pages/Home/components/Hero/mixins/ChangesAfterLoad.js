
const ChangesAfterLoad = {
  data () {
    return {
      changeDelay: 0
    }
  },

  methods: {
    change () {}
  },

  mounted () {
    window.addEventListener('load', () => {
      setTimeout(this.change, this.changeDelay)
    })
  }
}

export default ChangesAfterLoad
