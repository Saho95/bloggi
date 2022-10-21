let firebaseConfig = {
    apiKey: "AIzaSyDsOhy4NTY8CYa4ynpR5H7Gr5hj93ZKgiY",
    authDomain: "bloggi-afcf3.firebaseapp.com",
    projectId: "bloggi-afcf3",
    storageBucket: "bloggi-afcf3.appspot.com",
    messagingSenderId: "753546660610",
    appId: "1:753546660610:web:eaa084a91aa993f953501b",
    // measurementId: "G-YYD5PP3XKV"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();