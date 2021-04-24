const functions = require("firebase-functions");
const app = require('./app');
console.log(app);

exports.app = functions.https.onRequest(app);
