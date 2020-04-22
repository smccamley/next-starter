export default (state = false, action) => {
  switch (action.type) {
    case "STRIPE_LOADED":
      return true
    case "STRIPE_NOT_LOADED":
      return false
    default:
      return state
  }
}
