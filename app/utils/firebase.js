import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBihyE9l8DeyNP8IZDmftURJrdZslFZPB8",
    authDomain: "tenedores-1a209.firebaseapp.com",
    databaseURL: "https://tenedores-1a209.firebaseio.com",
    projectId: "tenedores-1a209",
    storageBucket: "tenedores-1a209.appspot.com",
    messagingSenderId: "379937798266",
    appId: "1:379937798266:web:402ba4d46c105a746063c3"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);

