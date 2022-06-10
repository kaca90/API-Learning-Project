import { useQuery } from 'react-query';
import { getSingleCharacter } from 'api/character';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../details/CharacterDetails.scss';

// novi task
// const string = 'https://rickandmortyapi.com/api/location/20'
// const id = string.replace('https://rickandmortyapi.com/api/location/','')
// console.log(id)

// dokumenta
// https://formik.org/docs/api/useFormik
// https://rickandmortyapi.com/documentation/#get-all-characters

const CharacterDetails = () => {
	const { characterId } = useParams();

	const { data: character } = useQuery(['single-character', characterId], async () => {
		const { data } = await getSingleCharacter(characterId);
		return data;
	});

	return (
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
				<div className="character-details__character-origin">First seen in:</div>
				<p className="character-details__character-origin-name">{character?.origin.name}</p>
			</div>
		</div>
	);
};

export default CharacterDetails;
