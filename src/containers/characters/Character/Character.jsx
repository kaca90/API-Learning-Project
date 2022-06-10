import './Character.scss';
import { Link } from 'react-router-dom';

const Character = ({ id, name, status, species, origin, location, image }) => {
	return (
		<div className="characters__character">
			<div className="characters__character-image">
				<img src={image} alt={name} />
			</div>
			<div className="characters__character-content">
				<Link to={`/${id}`} className="characters__character-name">
					{name}
				</Link>
				<div className="characters__character-status">
					{status} - {species}
				</div>
				<div className="characters__character-location">Last known location:</div>
				<p className="characters__character-location-name">{location.name}</p>
				<div className="characters__character-origin">First seen in:</div>
				<p className="characters__character-origin-name">{origin.name}</p>
			</div>
		</div>
	);
};

export default Character;
