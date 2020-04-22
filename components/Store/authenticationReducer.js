export default (
  state = {
    pending: false,
    failed: false,
    url: false,
  },
  action,
) => {
  switch (action.type) {
    case "SET_AUTHENTICATION_URL_PENDING":
      return {
        ...state,
        pending: true,
        failed: false,
      }

    case "SET_AUTHENTICATION_URL_FULFILLED":
      return {
        pending: false,
        failed: false,
        url: action.payload,
      }
    case "SET_AUTHENTICATION_URL_REJECTED":
      return {
        ...state,
        pending: false,
        failed: true,
      }
    default:
      return state
  }
}
