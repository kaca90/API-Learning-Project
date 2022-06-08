import { Route, Switch, Redirect } from 'react-router-dom';

// PAGES:
import Characters from './characters';
import CharacterDetails from './characters/details';

const Router = () => {
	return (
		<Switch>
			<Route exact component={Characters} path="/" />
			<Route component={CharacterDetails} path="/:id" />

			<Redirect to="/" />
		</Switch>
	);
};

export default Router;
