import React from "react"
import ReactDom from "react-dom"
import App from "./App";
import { createMemoryHistory } from 'history';

const mount = (el, { onNavigate }) => {
	const history = createMemoryHistory();

	if(onNavigate){
		history.listen(onNavigate(to))
	}

	
	ReactDom.render(
		<App history={history} />,
		el
	)
}

if (process.env.NODE_ENV === 'development') {
	const root = document.querySelector('#_marketing-root');
	root && mount(root, {});
}

export { mount }