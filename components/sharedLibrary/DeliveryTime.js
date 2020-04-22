import { useEffect } from "react"
import { connect } from "react-redux"
import { setDeliveryTime } from "../Store/deliveryTimeActions"

const DeliveryTime = ({ setTime, children }) => {
  useEffect(() => {
    setTime()
    const a = setInterval(setTime, 15 * 1000)
    return () => clearInterval(a)
  }, [])
  return children
}

export default connect(null, { setTime: setDeliveryTime })(DeliveryTime)
