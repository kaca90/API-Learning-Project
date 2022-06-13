import { useQuery } from 'react-query';
import { getSingleCharacter } from 'api/character';
import { getSingleLocation } from 'api/location';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../details/CharacterDetails.scss';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {
	const { characterId } = useParams();

	const { data: character } = useQuery(['single-character', characterId], async () => {
		const { data } = await getSingleCharacter(characterId);
		return data;
	});
	const locationId = character?.location.url.replace('https://rickandmortyapi.com/api/location/', '');

	const { data: location } = useQuery(
		['single-location', locationId],
		async () => {
			const { data } = await getSingleLocation(locationId);
			return data;
		},
		{
			enabled: Boolean(locationId),
		}
	);

	return (
		<>
			{/* character-details */}
			<div className="character-details__character">
				<div className="character-details__character-image">
					<img src={character?.image} alt={character?.name} />
				</div>

				<div className="character-details__character-content">
					<h2 className="character-details__character-name">{character?.name}</h2>
					<div className="character-details__character-status">
						{character?.status} - {character?.species}
					</div>
					<div className="character-details__character-location">Last known location:</div>
					<p className="character-details__character-location-name">{character?.location.name}</p>
					{/* <p>{character?.location.url}</p> */}
					<div className="character-details__character-origin">First seen in:</div>
					<p className="character-details__character-origin-name">{character?.origin.name}</p>
				</div>
			</div>

			{/* character-details__location */}
			<div className="character-details__location">
				<div className="character-details__location-content">
					<Link to={`/locations/${locationId}`} className="character-details__location-name">
						{location?.name}
					</Link>
					<div className="character-details__location-type">{location?.type}</div>
					<div className="character-details__location-dimension">{location?.dimension}</div>
				</div>
			</div>
		</>
	);
};

export default CharacterDetails;
