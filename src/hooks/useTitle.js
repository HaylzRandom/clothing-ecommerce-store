import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		const previousTitle = document.title;
		// Change current page title to new title
		document.title = title;

		return () => (document.title = previousTitle);
	}, [title]);
};

export default useTitle;
