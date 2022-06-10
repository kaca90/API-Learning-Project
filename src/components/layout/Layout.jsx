import './Layout.scss';
import Header from './Header/Header';

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			{children}
		</div>
	);
};

export default Layout;
