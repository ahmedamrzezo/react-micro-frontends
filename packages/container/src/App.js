import React, {lazy, Suspense, useState, useEffect} from 'react';
import Header from './components/Header';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

const MarketingAppLazy = lazy(() => import('./components/Marketing'));
const AuthAppLazy = lazy(() => import('./components/Auth'));
const DashboardAppLazy = lazy(() => import('./components/Dashboard'));

const history = createBrowserHistory();

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if(isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn])

	const signedIn = (is) => {
		setIsSignedIn(is);
	}

	return <Router history={history}>
		<div>
			<Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
			<Suspense fallback={<div>Loading...</div>}>

			<Switch>
				<Route path={'/auth'}><AuthAppLazy signedIn={signedIn}></AuthAppLazy></Route>
				<Route path={'/dashboard'}>
					{
						!isSignedIn && <Redirect to={'/'} />
					}
					<DashboardAppLazy />
				</Route>
				
				<Route path={'/'} component={MarketingAppLazy} />
			</Switch>
			</Suspense>
		</div>
	</Router>
}

export default App;