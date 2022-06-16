import { useLocationResidents } from './useLocationResidents';
import './LocationResidents.scss';

const LocationResidents = ({ residentsIds }) => {
	const { characters } = useLocationResidents(residentsIds);

	return (
		<>
			<div className="location__residents">
				{characters?.map((character) => (
					<div className="location__residents-character">
						<div className="location__residents-character-image">
							<img src={character.image} alt={character.name} />
						</div>
						<div className="location__residents-character-content">
							<h2 className="location__residents-character-name">{character.name}</h2>
							<div className="location__residents-character-status">
								{character.status} - {character.species}
							</div>
							<div className="location__residents-character-location">Last known location:</div>
							<p className="location__residents-character-location-name">{character.location.name}</p>
							<div className="location__residents-character-origin">First seen in:</div>
							<p className="location__residents-character-origin-name">{character.origin.name}</p>
						</div>
					</div>
				))}
			</div>
			
		</>
	);
};

export default LocationResidents;
