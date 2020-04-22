export default (state = { failed: false, checking: false }, action) => {
  switch (action.type) {
    case "GET_BUSINESS_HOURS_FULFILLED":
      return {
        failed: false,
        checking: false,
        ...action.payload,
        isOpen: isStoreOpen(action.payload),
      }
    case "GET_BUSINESS_HOURS_PENDING":
      return {
        ...state,
        failed: false,
        checking: true,
      }
    case "GET_BUSINESS_HOURS_REJECTED":
      return {
        ...state,
        failed: true,
        checking: false,
      }
    default:
      return state
  }
}

const isStoreOpen = (businessHours) => {
  if (!businessHours.open || !businessHours.close) return false

  const now = new Date()
  const open = new Date()
  const close = new Date()

  const openSplit = businessHours.open.split(":")
  const closeSplit = businessHours.close.split(":")

  open.setHours(openSplit[0])
  open.setMinutes(openSplit[1])
  open.setSeconds(0)
  open.setMilliseconds(0)

  close.setHours(closeSplit[0])
  close.setMinutes(closeSplit[1])
  close.setSeconds(0)
  close.setMilliseconds(0)

  // if closing time is actually tomorrow then add 1 day
  if (closeSplit[0] < openSplit[0]) close.setDate(now.getDate() + 1)

  if (now.getTime() < open.getTime() || now.getTime() > close.getTime())
    return false

  return true
}
