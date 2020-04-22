export const addItemToOrder = (item) => ({
  type: "ADD_ITEM",
  payload: item,
})

export const removeItemFromOrder = (itemId) => ({
  type: "REMOVE_ITEM",
  payload: itemId,
})

export const updateOrder = (order) => ({
  type: "UPDATE_ORDER",
  payload: order,
})
