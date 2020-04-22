export default (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case "CHECK_IF_USER_IS_LOGGED_IN_PENDING":
      return {
        ...state,
        checkingIfIsLoggedIn: true,
        errorCheckingIfIsLoggedIn: false,
      }
    case "CHECK_IF_USER_IS_LOGGED_IN_FULFILLED":
      return {
        ...state,
        isLoggedIn: action.payload,
        checkingIfIsLoggedIn: false,
        errorCheckingIfIsLoggedIn: false,
      }
    case "CHECK_IF_USER_IS_LOGGED_IN_ERROR":
      newState = {
        ...state,
        isLoggedIn: false,
        checkingIfIsLoggedIn: false,
        errorCheckingIfIsLoggedIn: true,
      }
      delete newState.id
      delete newState.token
      return newState
    case "CHECK_IF_USER_IS_LOGGED_IN_REJECTED":
      return {
        isLoggedIn: false,
        checkingIfIsLoggedIn: false,
        errorCheckingIfIsLoggedIn: true,
      }
    case "USER_LOGIN_INITIATED":
      return {
        ...state,
        loginInitiated: true,
      }
    case "SET_USER_TOKEN":
      newState = {
        ...state,
        token: action.payload,
      }
      delete newState.loginInitiated
      return newState
    case "SET_USER":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
