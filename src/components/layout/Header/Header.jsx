import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<nav className="header-nav">
				<ul>
					<NavLink to="/">
						<li>Character</li>
					</NavLink>

					<NavLink to="/locations">
						<li>Location</li>
					</NavLink>

					<NavLink to="/episodes">
						<li>Episode</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
