export default (state = false, action) => {
  switch (action.type) {
    case "SET_MOBILE":
      return action.payload
    default:
      return state
  }
}
