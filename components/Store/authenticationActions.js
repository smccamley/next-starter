import api from "../sharedLibrary/api"
export const setAuthenticationUrl = (phoneNumber) => ({
  type: "SET_AUTHENTICATION_URL",
  payload: new Promise(async (resolve, reject) => {
    const response = await api().post("Authentication", { phoneNumber })
    try {
      resolve(response.docScanUrl)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  }),
})
