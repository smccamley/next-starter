import { retrieveMedia, deleteMedia } from "./mediaData"
import { RequestBuilder, Payload } from "yoti"
import config from "./config"
import createSessionConfig from "./createSessionConfig"
import client from "./client"

/* Function to create a session using a user defined session object. 
 Returns a URL with session_id and client_session_token */
const createSession = async session => {
  console.log(config)
  const request = new RequestBuilder()
    .withBaseUrl(config.API_BASE_URL)
    .withPemString(config.PEM_KEY)
    .withEndpoint(config.API_PATH)
    .withPayload(new Payload(session))
    .withMethod("POST")
    .withQueryParam("sdkId", config.CLIENT_SDK_ID)
    .build()

  try {
    const postRequest = await request.execute()
    const {
      parsedResponse: { session_id, client_session_token },
    } = postRequest
    //url for frontend with session ID and token
    let docsUrl =
      config.API_BASE_URL +
      "/web/index.html" +
      "?sessionID=" +
      session_id +
      "&sessionToken=" +
      client_session_token
    return docsUrl
  } catch (e) {
    console.log(e)
  }
}

/* Function to delete session before it expires and is deleted automatically
   The session must be completed before it can be deleted. */
const deleteSession = async sessionId => {
  const request = new RequestBuilder()
    .withBaseUrl(config.API_BASE_URL)
    .withPemString(config.PEM_KEY)
    .withEndpoint(`/sessions/${sessionId}`)
    .withMethod("DELETE")
    .withQueryParam("sdkId", config.CLIENT_SDK_ID)
    .build()

  try {
    const deleteRequest = await request.execute()
    console.log(deleteRequest.getStatusCode())
  } catch (e) {
    console.log(e)
  }
}

/* Function to retreive the session from Yoti. 
   This can be done at any time after the session has been created. */
const retrieveSession = async sessionId => {
  console.log(config)
  let baseUrl = config.API_BASE_URL
  let testBaseUrl = baseUrl.replace(/\/+$/, "")
  console.log(testBaseUrl)
  const request = new RequestBuilder()
    .withBaseUrl(config.API_BASE_URL)
    .withPemString(config.PEM_KEY)
    .withEndpoint(`/sessions/${sessionId}`)
    .withMethod("GET")
    .withQueryParam("sdkId", config.CLIENT_SDK_ID)
    .build()

  try {
    const getResult = await request.execute()
    const { parsedResponse } = getResult
    return parsedResponse

    /*  Retrieve media from session
      Document image */
    // await retrieveMedia(
    //   sessionId,
    //   parsedResponse.resources.id_documents[0].pages[0].media.id
    // );
    /*  Document data extraction */
    // await retrieveMedia(
    //   sessionId,
    //   parsedResponse.resources.id_documents[0].tasks[0].generated_media[0].id
    // );

    /*  Delete media from session
      Document image */
    // await deleteMedia(
    //   sessionId,
    //   parsedResponse.resources.id_documents[0].pages[0].media.id
    // );
    /*  Document data extraction */
    // await deleteMedia(
    //   sessionId,
    //   parsedResponse.resources.id_documents[0].tasks[0].generated_media[0].id
    // );
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = {
  createSession,
  deleteSession,
  retrieveSession,
  config,
  createSessionConfig,
  client,
}
