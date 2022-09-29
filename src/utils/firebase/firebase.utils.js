import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC3ie9-_5mXrJwGEz9jeryaKaVp6xyLbY",
    authDomain: "crwn-cothing-db-c93dc.firebaseapp.com",
    projectId: "crwn-cothing-db-c93dc",
    storageBucket: "crwn-cothing-db-c93dc.appspot.com",
    messagingSenderId: "744812884128",
    appId: "1:744812884128:web:45c222ad08776d3da859c5"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//////////////////////
  
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
