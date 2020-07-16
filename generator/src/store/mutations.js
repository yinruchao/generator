export default {
  changeInfo (state,value) {
    state.info = value
    try {
      localStorage.info = value
    } catch (e) {}
  }
}
