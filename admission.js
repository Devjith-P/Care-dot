import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Function to handle form submission
const handleFormSubmit = function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const post = document.getElementById('post').value;

    try {
        // Get a reference to the database
        const database = getDatabase(app);

        // Push resident data to Firebase
        push(ref(database, 'residents/' + firstName), {
            firstName,
            lastName,
            email,
            phone,
            address,
            post
        }).then(() => {
            console.log('Resident added successfully');
            alert('Success');
            // Optionally, you can redirect the user to another page or show a success message here
        }).catch((error) => {
            console.error('Error adding resident: ', error);
            alert('Error adding resident: ' + error.message);
        });
    } catch (error) {
        console.error('Error accessing database: ', error);
        alert('Error accessing database: ' + error.message);
    }
};

// Add event listener to the form
const residentForm = document.getElementById('residentForm');
residentForm.addEventListener('submit', handleFormSubmit);
