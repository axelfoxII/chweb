// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyDDxqjihQfodBEkKQgvnuG7kXshN3ms1tk",
  authDomain: "canal-axelfoxii.firebaseapp.com",
  databaseURL: "https://canal-axelfoxii-default-rtdb.firebaseio.com",
  projectId: "canal-axelfoxii",
  storageBucket: "canal-axelfoxii.appspot.com",
  messagingSenderId: "61252929956",
  appId: "1:61252929956:web:bccb59aa3234626fc2d931",
  measurementId: "G-1QKYWCZ90K"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
