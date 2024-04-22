


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCUHoE5Fyz6kumSqIA7Jup6QRde1tgZ1Rk",
    authDomain: "care-dot.firebaseapp.com",
    databaseURL: "https://care-dot-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "care-dot",
    storageBucket: "care-dot.appspot.com",
    messagingSenderId: "1009142171667",
    appId: "1:1009142171667:web:22d83d11ee6fb142df17e6",
    measurementId: "G-FYZV3G8QWZ"
  };
  
  const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to handle login
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from form fields
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Call Firebase signInWithEmailAndPassword
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
      window.location.href='home.html'
      // You can redirect or do other actions here after successful sign-in
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign in error:", errorMessage);
      // You can display error messages to the user or handle them accordingly
    });
}

// Add event listener to the form submission
document.getElementById("login-form").addEventListener("submit", handleLogin);