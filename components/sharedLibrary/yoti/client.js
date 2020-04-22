import yoti from "yoti"
import config from "./config"

const getActivityDetails = async oneTimeUseToken =>
  new Promise((resolve, reject) => {
    const yotiClient = new yoti.Client(
      config.FRONTENT_CLIENT_SDK_ID,
      config.CLIENT_PEM_KEY,
    )
    yotiClient
      .getActivityDetails(oneTimeUseToken)
      .then(activityDetails => {
        if (activityDetails.getOutcome() !== "SUCCESS") {
          reject({ outcome: "failure" })
          return
        }
        const rememberMeId = activityDetails.getRememberMeId()
        console.log("rememberMeId: ", rememberMeId)

        const receiptId = activityDetails.getReceiptId()
        console.log("receiptId: ", receiptId)

        const timestamp = activityDetails.getTimestamp()

        console.log("timestamp: ", timestamp)

        const profile = activityDetails.getProfile()
        console.log("profile: ", profile)

        const selfieImageData = profile.getSelfie().getValue()
        const selfieUri = activityDetails.getBase64SelfieUri()
        console.log("selfieImageData: ", selfieImageData)

        const fullName = profile.getFullName().getValue()
        console.log("fullName: ", fullName)

        const emailAddress = profile.getEmailAddress().getValue()
        console.log("emailAddress: ", emailAddress)

        const structuredPostalAddress = profile
          .getStructuredPostalAddress()
          .getValue()

        console.log("structuredPostalAddress: ", structuredPostalAddress)

        const nationality = profile.getNationality().getValue()
        console.log("nationality: ", nationality)

        const result = {
          rememberMeId,
          receiptId,
          timestamp,
          fullName,
          emailAddress,
          structuredPostalAddress,
          nationality,
          selfieUri,
        }

        console.log("result: ", result)

        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })

export default {
  getActivityDetails,
}
