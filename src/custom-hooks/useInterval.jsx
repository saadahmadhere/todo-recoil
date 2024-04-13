import React, { useEffect } from 'react';

const useInterval = (cb, n) => {
	useEffect(() => {
		const id = setInterval(() => {
			cb();
		}, n);

		return () => clearInterval(id);
	}, [cb, n]);
	return <div></div>;
};

export default useInterval;
