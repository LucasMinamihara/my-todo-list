// Importing firebase stuff
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCun1bskWeBsuN_jeHBkkILXmiwFTjpPeY",
  authDomain: "loginto-do-list.firebaseapp.com",
  projectId: "loginto-do-list",
  storageBucket: "loginto-do-list.appspot.com",
  messagingSenderId: "1079724013391",
  appId: "1:1079724013391:web:33457849d6c5ae0525f73a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Taking values from front end when click on create an account

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

document.querySelector(".createAccount").addEventListener("click", function () {
  const nameUserInput = document.querySelector(".nameUser").value;
  const emailUserInput = document.querySelector(".emailUser").value;
  const passwordUserInput = document.querySelector(".passwordUser").value;

  const auth = getAuth(nameUserInput);
  createUserWithEmailAndPassword(auth, emailUserInput, passwordUserInput)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
