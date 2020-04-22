import { clearState } from "../Store/actions"
import { connect } from "react-redux"

const DataCleanupOnUpdate = ({ store, children, clearState }) => {
  if (store && store.order && store.order.meals) {
    clearState()
  }

  return children
}

export default connect((state) => ({ store: state }), { clearState })(
  DataCleanupOnUpdate,
)
