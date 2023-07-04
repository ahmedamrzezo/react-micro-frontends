import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";


const generateClassName = createGenerateClassName({
	productionPrefix: 'au'
})

const App = ({history, onSignIn}) => {
	return <div>
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route path={'/auth/signup'}>
						<SignUp onSignIn={onSignIn}></SignUp>
					</Route>
					<Route path={'/auth/signin'}>
						<SignIn onSignIn={onSignIn}></SignIn>
					</Route>
				</Switch>
			</Router>
		</StylesProvider>
	</div>
}

export default App;