import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUrzZfBLbDOKYjtcmUZiCl9jPq3Vpib8o",
  authDomain: "navu-love.firebaseapp.com",
  projectId: "navu-love",
  storageBucket: "navu-love.firebasestorage.app",
  messagingSenderId: "843475296751",
  appId: "1:843475296751:web:b4672a6746eb611264561a",
  measurementId: "G-RVZ0CHHNBS"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// ✅ Register service worker FIRST
navigator.serviceWorker.register("firebase-messaging-sw.js")
.then((registration) => {

  // ✅ Ask notification permission
  Notification.requestPermission().then((permission) => {

    if (permission === "granted") {

      getToken(messaging, {
        vapidKey: "BKcWWH8wyUBgvU891IAtSJUASMWTjJ2sZ05gC98YZDcmT9NCskpuJQc8QiQCooruMEEm1u_EYHZRnEUvK4P8hHg",
        serviceWorkerRegistration: registration
      })
      .then((token) => {
        console.log("TOKEN:", token);
        alert("Connected 💖 Save this token!");
      })
      .catch((err) => {
        console.log("Error getting token:", err);
      });

    } else {
      alert("Notifications blocked 😢");
    }

  });

});
