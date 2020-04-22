import { useEffect } from "react"
import { connect } from "react-redux"

import { getBusinessHours } from "../Store/businessHoursActions"

const SetBusinessHours = ({ children, getBusinessHours }) => {
  useEffect(() => {
    getBusinessHours()
  }, [])

  return children
}

export default connect(null, { getBusinessHours })(SetBusinessHours)
