importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAUrzZfBLbDOKYjtcmUZiCl9jPq3Vpib8o",
  authDomain: "navu-love.firebaseapp.com",
  projectId: "navu-love",
  messagingSenderId: "843475296751",
  appId: "1:843475296751:web:b4672a6746eb611264561a"
});

const messaging = firebase.messaging();
