import { Route, Switch, Redirect } from 'react-router-dom';

// PAGES:
import Characters from './characters/Characters';
import CharacterDetails from './characters/details/CharacterDetails';
import LocationDetails from './locations/details/LocationDetails';
import Locations from './locations/Locations';

const Router = () => {
	return (
		<Switch>
			<Route exact component={Locations} path="/locations" />
			<Route component={LocationDetails} path="/locations/:locationId" />

			<Route exact component={Characters} path="/" />
			<Route component={CharacterDetails} path="/:characterId" />

			<Redirect to="/" />
		</Switch>
	);
};

export default Router;
