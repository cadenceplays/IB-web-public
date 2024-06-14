/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * List of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {getMessaging} = require("firebase-admin/messaging");

// admin.initializeApp();
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

exports.sendFCM = functions.https.onCall(async (data, context) => {
  /* eslint max-len: ["error", { "ignoreStrings": true }]*/
  const messaging = getMessaging();
  const msg = {
    notification: {
      title: data.fcmtitle,
      body: data.fcmbody,
      image: "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/general%2Fmaskable_icon_x96.png?alt=media&token=f52a5642-d8dc-4617-b2d4-2f98cd881714",
    },
    tokens: data.tokenlist,
  };

  await messaging.sendMulticast(msg)
      .then((response) => {
        console.log("FCM success: ", response);
      })
      .catch((error) => {
        console.log("FCM error: ", error);
      });
});
