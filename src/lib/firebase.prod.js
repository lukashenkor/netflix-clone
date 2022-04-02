import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyAQvR67UGYHC4K1vByBIKmT0fr2Fx5thWk",
  authDomain: "netfix-clone-54986.firebaseapp.com",
  projectId: "netfix-clone-54986",
  storageBucket: "netfix-clone-54986.appspot.com",
  messagingSenderId: "207359386971",
  appId: "1:207359386971:web:d23bcc93767fe9b5f0a67e",
};

const firebase = Firebase.initializeApp(config);


export { firebase };