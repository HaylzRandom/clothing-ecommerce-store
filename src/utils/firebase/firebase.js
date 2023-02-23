import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAx740mmC4dLQpzcyDpClZC1DbPTvxNpX8',

	authDomain: 'clothing-store-test.firebaseapp.com',

	projectId: 'clothing-store-test',

	storageBucket: 'clothing-store-test.appspot.com',

	messagingSenderId: '351295543531',

	appId: '1:351295543531:web:e72860c9d0d2d20f30c6ae',
};

const firebaseApp = initializeApp(firebaseConfig);

// Auth
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, provider);

// Database - Auth
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	// Check if user data exists

	// If user data does not exist
	if (!userSnapshot.exists()) {
		// Create / Set the document with the data from userAuth in my collection
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userDocRef;
};
