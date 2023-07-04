import { mount } from 'dashboard/DashboardApp';
import React, { useEffect, useRef } from 'react';

const DashboardApp = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, [ref]);

	return <div ref={ref}></div>
}

export default DashboardApp;