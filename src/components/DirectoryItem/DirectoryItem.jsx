import { useNavigate } from 'react-router-dom';

// Styles
import './directoryItem.styles.scss';

const DirectoryItem = ({ directory }) => {
	const { title, imageUrl, route } = directory;

	const navigate = useNavigate();

	// Handlers
	const onNavigateHandler = () => navigate(route);

	return (
		<div className='directory-item-container' onClick={onNavigateHandler}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='directory-item-body'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
