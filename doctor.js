import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = getDatabase(app);

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    console.log('Submitting form...');
  
    // Get form data
    const residentName = document.getElementById('firstname').value;
    const doctorName = document.getElementById('doctorname').value;
    const purpose = document.getElementById('address').value;
    const currentDate = new Date(); // Get current date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  
    console.log('Form data:', residentName, doctorName, purpose, formattedDate);
  
    // Store data in Firebase with unique key
    const newEntryRef = push(ref(database, `doctors/${doctorName}/${formattedDate}`));
    set(newEntryRef, {
      residentName: residentName,
      reason: purpose,
    }).then(() => {
      console.log('Data stored successfully');
      // Optionally, you can redirect the user or show a success message
    }).catch((error) => {
      console.error('Error storing data:', error);
    });
}

// Add event listener to form submission
document.getElementById('residentForm').addEventListener('submit', submitForm);
