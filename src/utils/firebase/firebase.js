import { isEmpty } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	getDocs,
	setDoc,
	collection,
	writeBatch,
	query,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAx740mmC4dLQpzcyDpClZC1DbPTvxNpX8',

	authDomain: 'clothing-store-test.firebaseapp.com',

	projectId: 'clothing-store-test',

	storageBucket: 'clothing-store-test.appspot.com',

	messagingSenderId: '351295543531',

	appId: '1:351295543531:web:e72860c9d0d2d20f30c6ae',
};

initializeApp(firebaseConfig);

// Database
export const db = getFirestore();

// Add to firestore collections
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd,
	field
) => {
	const collectionRef = collection(db, collectionKey);

	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object[field].toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('Done');
};

// Auth - Google
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	// Check if user data exists
	const userSnapshot = await getDoc(userDocRef);

	// If user data does not exist
	if (!userSnapshot.exists()) {
		// Create / Set the document with the data from userAuth in my collection
		const { email, providerId } = userAuth.providerData[0];
		let { displayName } = userAuth.providerData[0];

		const createdAt = new Date();

		// If email and password being used, displayName will need to be retrieved from additionalInfo prop
		if (!displayName && !isEmpty(additionalInfo)) {
			displayName = additionalInfo.displayName;
		}

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				providerId,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userDocRef;
};

// Auth - Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

// Auth - Sign Out User
export const signOutUser = async () => await signOut(auth);

// Auth - Listens for changes in auth state e.g. User logs in or logs out
export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback);
};

// Products

export const getCategoriesAndDocuments = async () => {
	// Fetch specific collection
	const collectionRef = collection(db, 'categories');

	// Fetch all documents in collections using query
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
