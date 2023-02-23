// Components
import DirectoryItem from '../DirectoryItem/DirectoryItem';

// Styles
import './directory.style.scss';

// Data
import directories from '../../data/directories.json';

const Directory = () => {
	return (
		<div className='directories-container'>
			{directories.map((directory) => (
				<DirectoryItem key={directory.id} directory={directory} />
			))}
		</div>
	);
};
export default Directory;
