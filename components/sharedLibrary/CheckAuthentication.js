import { useEffect } from "react"
import { connect } from "react-redux"

import { checkIfUserIsLoggedIn } from "../Store/userActions"

const CheckAuthentication = ({ user, checkIfUserIsLoggedIn, children }) => {
  useEffect(() => {
    checkIfUserIsLoggedIn(user)
  }, [])

  return children
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  { checkIfUserIsLoggedIn },
)(CheckAuthentication)
