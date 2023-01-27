import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAfUSiJThlPEtplPaDWOw3txy-Xj6odEts',
    authDomain: 'pokemon-148cd.firebaseapp.com',
    projectId: 'pokemon-148cd',
    storageBucket: 'pokemon-148cd.appspot.com',
    messagingSenderId: '480028448283',
    appId: '1:480028448283:web:87b31dbdf84d33fd7d8abe',
};

export const app = initializeApp(firebaseConfig);
