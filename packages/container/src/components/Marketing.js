import { mount } from 'marketing/MarketingApp';
import React, {useEffect, useRef} from 'react';

const MarketingApp = () => {
	const ref = useRef(null);

	useEffect(() => mount(ref.current), [ref]);

	return <div ref={ref}></div>
}

export default MarketingApp;
