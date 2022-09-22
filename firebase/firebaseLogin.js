import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCun1bskWeBsuN_jeHBkkILXmiwFTjpPeY",
  authDomain: "loginto-do-list.firebaseapp.com",
  projectId: "loginto-do-list",
  storageBucket: "loginto-do-list.appspot.com",
  messagingSenderId: "1079724013391",
  appId: "1:1079724013391:web:33457849d6c5ae0525f73a",
};

const app = initializeApp(firebaseConfig);

// Taking email value from input
const login = document
  .querySelector(".login")
  .addEventListener("click", function () {
    const email = document.querySelector(".authEmail ").value;
    const password = document.querySelector(".authPassword").value;
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign in");
      })
      .catch((err) => {
        console.log(err);
      });
    if (email && password) {
    }
  });
