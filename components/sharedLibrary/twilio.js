import twilio from "twilio"

const accountSid = process.env.TWILLIO_ACCOUNT_SID
const authToken = process.env.TWILLIO_AUTH_TOKEN

export default new twilio(accountSid, authToken)
