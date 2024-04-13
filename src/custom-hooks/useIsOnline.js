import { useEffect, useState } from 'react';

const useIsOnline = () => {
	const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);

	useEffect(() => {
		const handleOnline = () => {
			console.log('You are now connected to the network.');
			setIsUserOnline(true);
		};
		const handleOffline = () => {
			console.log('You are offline.');
			setIsUserOnline(false);
		};

		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return { isUserOnline };
};

export default useIsOnline;
