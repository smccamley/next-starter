import api from "../sharedLibrary/api"

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
})

export const setUserToken = (token) => ({
  type: "SET_USER_TOKEN",
  payload: token,
})

export const logout = () => ({
  type: "USER_LOGOUT",
})

export const login = (phoneNumber) => ({
  type: "USER_LOGIN_INITIATED",
  payload: new Promise(async (resolve, reject) => {
    try {
      const result = await api().post("Login", { phoneNumber })
      if (result.status === 201) {
        return resolve(true)
      }
      throw { error: "unkown" }
    } catch (error) {
      reject(false)
    }
  }),
})

export const checkIfUserIsLoggedIn = (user) => ({
  type: "CHECK_IF_USER_IS_LOGGED_IN",
  payload: new Promise(async (resolve, reject) => {
    try {
      if (!user.token && !user.id) return resolve(false)
      const response = await api(user).get("ValidateLoginToken")
      if (response.status === 401) {
        return reject(false)
      } else if (response.status === 400) {
        return resolve(false)
      } else if (response.status === 200) {
        return resolve(true)
      }
      return resolve(false)
    } catch (error) {
      return resolve(false)
    }
  }),
})
