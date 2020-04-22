export const removeWhiteSpace = (str) => str.replace(/\s/g, "")
export const ifyMessage = (str) =>
  JSON.stringify({
    status: str,
  })

export default {
  removeWhiteSpace,
  ifyMessage,
}
