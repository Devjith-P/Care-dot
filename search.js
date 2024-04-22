// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, orderByChild, startAt, endAt, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Initialize Firebase
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
const database = getDatabase(app);

// Function to handle search
function search() {
    // Get the search query from the input field
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  
    // Reference to the "residents" node in the database
    const residentsRef = ref(database, 'residents');
  
    // Clear previous search results
    document.getElementById('searchResults').innerHTML = '';
  
    // Query the database for matching records
    const query = orderByChild(residentsRef, 'firstName');
    const filteredQuery = startAt(query, searchTerm).endAt(query, searchTerm + '\uf8ff');

    get(filteredQuery).then((snapshot) => {
        snapshot.forEach(childSnapshot => {
            const result = childSnapshot.val();
            // Display search result
            const resultElement = document.createElement('div');
            resultElement.textContent = result.firstname + ' ' + result.lastname;
            document.getElementById('searchResults').appendChild(resultElement);
        });
    }).catch((error) => {
        console.error("Error getting data: ", error);
    });
}

// Add event listener to trigger search on input change
document.getElementById('searchInput').addEventListener('input', search);
