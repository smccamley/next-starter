export default (
  state = { failed: false, checking: false, time: 0 },
  action,
) => {
  switch (action.type) {
    case "SET_DELIVERY_TIME_FULFILLED":
      return {
        failed: false,
        checking: false,
        time: action.payload,
      }
    case "SET_DELIVERY_TIME_PENDING":
      return {
        ...state,
        failed: false,
        checking: true,
      }
    case "SET_DELIVERY_TIME_REJECTED":
      return {
        ...state,
        failed: true,
        checking: false,
      }
    default:
      return state
  }
}
