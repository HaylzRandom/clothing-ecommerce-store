import { Link } from 'react-router-dom';

// Components
import Button from '../../components/Button/Button';

// Styles
import './orderSuccess.scss';

const OrderSuccess = () => {
	return (
		<div className='order-success'>
			<h1 className='title'>Order Successful! 🥳 </h1>
			<p className='text'>Thanks for your order!</p>
			<p className='small'>Don't worry, you haven't really ordered anything!</p>
			<Link to='/'>
				<Button buttonType='inverted'>Home</Button>
			</Link>
		</div>
	);
};
export default OrderSuccess;
