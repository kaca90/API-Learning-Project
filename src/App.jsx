import ReactQueryProvider from 'components/providers/ReactQueryProvider';
import Layout from 'components/layout/Layout';
import Router from 'containers/Router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<ReactQueryProvider>
					<Layout>
						<Router />
					</Layout>
				</ReactQueryProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
