import ReactQueryProvider from 'components/providers/ReactQueryProvider';
import Router from 'containers/Router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const App = () => {
	return (
		<div className="App">
			<BrowserRouter history={history}>
				<ReactQueryProvider>
					<Router />
				</ReactQueryProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
