import { useEffect, useState } from "react"
import { connect } from "react-redux"

import { setMobile } from "../Store/mobileActions"

const SetMobile = ({ children, setMobile, mobile }) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })

  useEffect(() => {
    if (mobile && width >= 600) setMobile(false)
    if (!mobile && width < 600) setMobile(true)
  }, [width])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  return children
}

export default connect(
  (state) => ({
    mobile: state.mobile,
  }),
  { setMobile },
)(SetMobile)
