import { mount } from 'marketing/MarketingApp';
import React, {useEffect, useRef} from 'react';
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
	const ref = useRef(null);
	const history = useHistory();
	
	useEffect(() => mount(ref.current, {
		onNavigate({pathname: next}) {
			const {pathname} = history.location;

			if(pathname !== next) {
				history.push(next);
			}
		}
	}), [ref]);

	return <div ref={ref}></div>
}

export default MarketingApp;
