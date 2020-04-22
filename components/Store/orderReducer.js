export default (state = { items: [], address: {} }, action) => {
  switch (action.type) {
    case "UPDATE_ORDER":
      return {
        ...state,
        ...action.payload,
      }
    case "REMOVE_ITEM":
      let items = [...state.items]
      items.splice(action.payload, 1)
      return { ...state, items }
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] }
    default:
      return state
  }
}
