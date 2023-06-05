// app.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAW9X87jDJ9CIcsDKjPN47XDVNAYT5Hh3s",
    authDomain: "cdn-69.firebaseapp.com",
    databaseURL: "https://cdn-69-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cdn-69",
    storageBucket: "cdn-69.appspot.com",
    messagingSenderId: "150667087421",
    appId: "1:150667087421:web:2864406dec328459f86454"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();

const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const resultDiv = document.getElementById('result');
const urlInput = document.getElementById('urlInput');

uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = fileInput.files[0];
  if (file) {
    const fileName = file.name;
    const fileRef = storageRef.child(fileName);

    try {
      const snapshot = await fileRef.put(file);
      const downloadURL = await snapshot.ref.getDownloadURL();
      resultDiv.classList.remove('hidden');
      urlInput.value = downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
});
