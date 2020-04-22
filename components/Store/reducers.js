import { combineReducers } from "redux"
import user from "./userReducer"
import authentication from "./authenticationReducer"
import mobile from "./mobileReducer"
import order from "./orderReducer"
import stripe from "./stripeReducer"
import delivery from "./deliveryTimeReducer"
import businessHours from "./businessHoursReducer"
import { initialState } from "./index"

const appReducer = combineReducers({
  user,
  authentication,
  mobile,
  order,
  stripe,
  delivery,
  businessHours,
})

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STATE") {
    return appReducer(initialState, action)
  }
  return appReducer(state, action)
}

export default rootReducer
