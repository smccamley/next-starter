import api from "../sharedLibrary/api"

export const getBusinessHours = () => ({
  type: "GET_BUSINESS_HOURS",
  payload: new Promise(async (resolve, reject) => {
    try {
      const { body, status } = await api().get("BusinessHours")
      if (status !== 200) throw { error: true }
      resolve(body)
    } catch (error) {
      reject(error)
    }
  }),
})
