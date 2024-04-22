import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

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

const app =initializeApp(firebaseConfig);

  // Get a reference to the authentication service
  const auth = getAuth();
  

  function checkAuth() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not authenticated, redirect to login page
        window.location.href = 'login.html';
      }
    });
  }
  
  // Call checkAuth() function on page load
  document.addEventListener('DOMContentLoaded', checkAuth);







  document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the logout button
    const logoutButton = document.querySelector('.b-logout');
    
    // Add click event listener to the logout button
    logoutButton.addEventListener('click', function() {
        logout();
    });
});




  // Function to handle logout
  function logout() {
      auth.signOut()
          .then(() => {
              // Redirect to login page or perform other actions as needed
              window.location.href = 'login.html'; // Redirect to login page after logout
          })
          .catch((error) => {
              // An error happened.
              console.error("Logout error:", error);
              // Handle errors or display error message to the user
          });
  }