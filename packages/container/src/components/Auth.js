import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

const AuthApp = ({signedIn}) => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			initialPath: history.location.pathname,
			onNavigate({ pathname: next }) {
				const { pathname } = history.location;

				if (pathname !== next) {
					history.push(next);
				}
			},
			singedIn: () => {
				signedIn(true);
			}

		});

		history.listen(onParentNavigate);
	}, [ref]);

	return <div ref={ref}></div>
}

export default AuthApp;