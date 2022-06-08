import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router-dom';
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

const history = createBrowserHistory();

const Router = () => {
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route exact component={Dashboard} path="/" />

				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
