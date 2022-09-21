import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

// Taking email value from input
const login = document
  .querySelector(".login")
  .addEventListener("click", function () {
    const email = document.querySelector(".authEmail ").value;
    const password = document.querySelector(".authPassword").value;
    if (email && password) {
      // Verify if the account in storage on backend
    }
  });


  
