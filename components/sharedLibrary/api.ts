import fetch from "isomorphic-fetch"

const headers = { "Content-Type": "application/json" }
const apiBaseUrl = "/api/"

const addAuthorisationToHeaders = (headers, user) => {
  if (user) {
    headers["x-token-auth"] = user.token
    headers["x-user-id"] = user.id
  }
  return headers
}

export default (user) => {
  return {
    get: (url) =>
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${apiBaseUrl}${url}`, {
            method: "GET",
            headers: addAuthorisationToHeaders(headers, user),
          })
          const responseJson = await response.json()
          resolve({
            status: response.status,
            body: responseJson,
          })
        } catch (error) {
          console.warn("API GET error: ", error)
          reject(error)
        }
      }),
    post: (url, payload) =>
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${apiBaseUrl}${url}`, {
            method: "POST",
            headers: addAuthorisationToHeaders(headers, user),
            body: JSON.stringify(payload),
          })
          const responseJson = await response.json()
          resolve({
            status: response.status,
            body: responseJson,
          })
        } catch (error) {
          console.warn("API POST error: ", error)
          reject(error)
        }
      }),
    patch: (url, payload) =>
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${apiBaseUrl}${url}`, {
            method: "PATCH",
            headers: addAuthorisationToHeaders(headers, user),
            body: JSON.stringify(payload),
          })
          const responseJson = await response.json()
          resolve({
            status: response.status,
            body: responseJson,
          })
        } catch (error) {
          console.warn("API PATCH error: ", error)
          reject(error)
        }
      }),
  }
}
