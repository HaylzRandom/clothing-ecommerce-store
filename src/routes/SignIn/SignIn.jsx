// Utils
import { signInWithGooglePopup } from '../../utils/firebase/firebase';

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};

	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>
				Sign In with Google Popup
			</button>
		</>
	);
};

export default SignIn;
