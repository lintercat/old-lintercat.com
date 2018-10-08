export default {
  props: {
    theme: {
      type: String,
      default: 'dark',
      validator: (val) =>
        ['dark', 'light'].includes(val)
    }
  }
}
