import React from "react"
import ReactDom from "react-dom"
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	});

	if(onNavigate){
		history.listen(onNavigate)
	}

	
	ReactDom.render(
		<App history={history} />,
		el
	);
	return {
		onParentNavigate({pathname: next}) {
			const {pathname} = history.location;

			if(pathname !== next) {
				history.push(next);
			}
		}
	}
}

if (process.env.NODE_ENV === 'development') {
	const root = document.querySelector('#_marketing-root');
	root && mount(root, {defaultHistory: createBrowserHistory()});
}

export { mount }