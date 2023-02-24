// Style
import './formInput.styles.scss';

const FormInput = ({ label, htmlFor, ...otherProps }) => {
	return (
		<div className='group'>
			<input className='form-input' {...otherProps} />
			{label && (
				<label
					htmlFor={htmlFor}
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}>
					{label}
				</label>
			)}
		</div>
	);
};
export default FormInput;
