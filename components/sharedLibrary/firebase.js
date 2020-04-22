import * as firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId,
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const writeForTheFirstTime = (ref, data) =>
  new Promise((resolve, reject) => {
    if (!ref) reject({ message: "misssng firebase reference" })
    return firebase
      .database()
      .ref("/" + ref)
      .once("value")
      .then((snapshot) => {
        const value = snapshot.val()

        if (value)
          return reject({
            message: "reference exists",
          })

        firebase
          .database()
          .ref("/" + ref)
          .set(data, (error) => {
            if (error) {
              reject({ message: "Error saving data to firebase", error: error })
            } else {
              resolve("DATA SAVED to firebase")
            }
          })
      })
  })

const findUserByPhoneNumber = (phoneNumber) =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("helpers")
      .orderByChild("phoneNumber")
      .equalTo(phoneNumber)
      .limitToFirst(1)
      .once("value")
      .then((snapshot) => {
        const value = snapshot.val()
        resolve(value)
      })
      .catch((error) => {
        reject(error)
      })
  })

const findFirstByRefKeyValue = (ref, key, value) =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(ref)
      .orderByChild(key)
      .equalTo(value)
      .limitToFirst(1)
      .once("value")
      .then((snapshot) => {
        const value = snapshot.val()
        resolve(value)
      })
      .catch((error) => {
        reject(error)
      })
  })

const getByRef = (ref) =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(ref)
      .once("value")
      .then((snapshot) => {
        const value = snapshot.val()
        resolve(value)
      })
      .catch((err) => {
        reject(err)
      })
  })

const deleteByRef = (ref) =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(ref)
      .remove()
      .then(() => {
        resolve()
      })
      .catch(() => {
        reject()
      })
  })

const setByRef = (ref, data) =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(ref)
      .set(data, (error) => {
        if (error) {
          reject({ message: "Error saving data to firebase", error: error })
        } else {
          resolve("DATA SAVED to firebase")
        }
      })
  })

const updateByRef = (ref, data) =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(ref)
      .update(data, (error) => {
        if (error) {
          reject({ message: "Error saving data to firebase", error: error })
        } else {
          resolve("DATA SAVED to firebase")
        }
      })
  })

export default {
  findUserByPhoneNumber,
  setByRef,
  updateByRef,
  getByRef,
  deleteByRef,
  writeForTheFirstTime,
  findFirstByRefKeyValue,
}
