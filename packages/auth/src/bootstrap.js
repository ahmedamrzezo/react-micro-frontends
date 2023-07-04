import React from "react"
import ReactDom from "react-dom"
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory, initialPath, singedIn }) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	});

	if(onNavigate){
		history.listen(onNavigate)
	}

	
	ReactDom.render(
		<App history={history} onSignIn={singedIn} />,
		el
	);
	return {
		onParentNavigate({pathname: next}) {
			const {pathname} = history.location;
			console.log(next);

			if(pathname !== next) {
				history.push(next);
			}
		}
	}
}

if (process.env.NODE_ENV === 'development') {
	const root = document.querySelector('#_auth-root');
	root && mount(root, {defaultHistory: createBrowserHistory()});
}

export { mount }