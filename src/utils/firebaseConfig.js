
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCZc0YvVmaBFeIsWar6OWDzjgBIa_Jz17Y",
  authDomain: "todo-informatica.firebaseapp.com",
  projectId: "todo-informatica",
  storageBucket: "todo-informatica.appspot.com",
  messagingSenderId: "77337717939",
  appId: "1:77337717939:web:aff4b8ca41097d5b6e14c6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db