import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  /* apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId */

  apiKey: "AIzaSyAxTPgtpkTo8CWBtYBpM40wPRK5Z5krHMw",
  authDomain: "jobbox-test-2ad5d.firebaseapp.com",
  projectId: "jobbox-test-2ad5d",
  storageBucket: "jobbox-test-2ad5d.appspot.com",
  messagingSenderId: "335455806856",
  appId: "1:335455806856:web:893466f8966a3e9dccc63d"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth