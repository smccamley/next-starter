import api from "../sharedLibrary/api"

export const setDeliveryTime = () => ({
  type: "SET_DELIVERY_TIME",
  payload: new Promise(async (resolve, reject) => {
    try {
      const {
        body: { deliveryTime },
        status,
      } = await api().get("DeliveryTime")
      if (status !== 200) throw { error: true }
      resolve(deliveryTime)
    } catch (error) {
      reject(error)
    }
  }),
})
