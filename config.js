import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from "firebase/firestore";

const firebaseConfig={

    apiKey: "AIzaSyB4Rey17ngumPxcAyXoiXf1xHkEf3tgE50",
    authDomain: "onboar-80c9a.firebaseapp.com",
    projectId: "onboar-80c9a",
    storageBucket: "onboar-80c9a.appspot.com",
    messagingSenderId: "742331361",
    appId: "1:742331361:web:d958524f1302f1b31e38a0"
}

const app =initializeApp(firebaseConfig)
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export const db=getFirestore(app);

const auth=firebase.auth()

export {firebase};
export {auth};