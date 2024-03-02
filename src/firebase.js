
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh5BHHCET99vWnHSI1exKhgR3bkWOaMwg",
  authDomain: "uploadingfile-aa59a.firebaseapp.com",
  projectId: "uploadingfile-aa59a",
  storageBucket: "uploadingfile-aa59a.appspot.com",
  messagingSenderId: "50847346193",
  appId: "1:50847346193:web:b11484ddcfc75270798bb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);