// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Initialize Firebase with your configuration
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

const firebaseApp = initializeApp(firebaseConfig);

// Function to submit the report to Firebase
function submitReport() {
    // Get the report text from the textarea
    const reportText = document.querySelector('textarea').value;
    
    // Get the current date and time
    const currentDateTime = new Date().toISOString(); // Format: YYYY-MM-DDTHH:mm:ss.sssZ
    
    // Extract date and time separately
    const currentDate = currentDateTime.slice(0, 10); // Date: YYYY-MM-DD
    const currentTime = currentDateTime.slice(11, 19); // Time: HH:mm:ss
    
    // Reference to the Firebase database
    const database = getDatabase(firebaseApp);
    const reportsRef = ref(database, 'reports');
    
    // Push the report data to Firebase with the current date and time as the key
    const reportRef = child(reportsRef, `${currentDate}/${currentTime}`);
    set(reportRef, {
      report: reportText
    })
    .then(() => {
      console.log('Report submitted successfully!');
      // Clear the textarea field
      document.querySelector('textarea').value = '';
      alert('Report successfully submitted');
    })
    .catch((error) => {
      console.error('Error submitting report:', error);
      // Optionally, you can display an error message to the user
    });
  }

// Attach the submitReport function to the submit button
document.querySelector('.b-submit').addEventListener('click', submitReport);
