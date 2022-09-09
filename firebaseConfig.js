import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAb70NGXWAIObuis_r1BJq6Re8AVyT2JNU",
  authDomain: "sticker-manager-55d97.firebaseapp.com",
  projectId: "sticker-manager-55d97",
  storageBucket: "sticker-manager-55d97.appspot.com",
  messagingSenderId: "284237890907",
  appId: "1:284237890907:web:ed275e5f99a26dc598467e",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
