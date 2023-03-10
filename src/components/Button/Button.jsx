/*
    Default

    Inverted

    Google Sign In
*/

// Styles
import './button.styles.scss';

// Components
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';

export const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			disabled={isLoading}
			{...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</button>
	);
};
export default Button;
