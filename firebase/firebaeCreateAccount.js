// Importing stuff from firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

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

const createAccount = document.querySelector(".createAccount");

// Working, creating account
createAccount.addEventListener("click", function () {
  let email = document.querySelector(".emailUser").value;
  let password = document.querySelector(".passwordUser").value;
  if (email && password) {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign-in");
      })
      .catch((err) => {
        if (err.message.includes("password")) {
          console.log("You Should put a password at least 6 characters");
        }
        if (err.message.includes("email")) {
          console.log(
            "You should use symbols @ .com .outlook and so on and so fourth"
          );
        }
      });
  }
});
