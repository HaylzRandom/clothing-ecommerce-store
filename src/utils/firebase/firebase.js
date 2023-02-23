import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAx740mmC4dLQpzcyDpClZC1DbPTvxNpX8',

	authDomain: 'clothing-store-test.firebaseapp.com',

	projectId: 'clothing-store-test',

	storageBucket: 'clothing-store-test.appspot.com',

	messagingSenderId: '351295543531',

	appId: '1:351295543531:web:e72860c9d0d2d20f30c6ae',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, provider);
