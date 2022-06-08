import '../details/CharacterDetails.scss';
const character = {
	id: 2,
	name: 'Morty Smith',
	status: 'Alive',
	species: 'Human',
	type: '',
	gender: 'Male',
	origin: {
		name: 'Earth',
		url: 'https://rickandmortyapi.com/api/location/1',
	},
	location: {
		name: 'Earth',
		url: 'https://rickandmortyapi.com/api/location/20',
	},
	image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
	episode: [
		'https://rickandmortyapi.com/api/episode/1',
		'https://rickandmortyapi.com/api/episode/2',
		// ...
	],
	url: 'https://rickandmortyapi.com/api/character/2',
	created: '2017-11-04T18:50:21.651Z',
};

const CharacterDetails = () => {
	return (
		<div className="character-details__character">
			<div className="character-details__character-image">
				<img src={character.image} alt={character.name} />
			</div>
			<div className="character-details__character-content">
				<h2 className='character-details__character-name'>{character.name}</h2> 
				<div className="character-details__character-status">
                {character.status} - {character.species}
                </div>
				<div className="character-details__character-location">Last known location:</div>
				<p className="character-details__character-location-name">{character.location.name}</p>
				<div className="character-details__character-origin">First seen in:</div>
				<p className="character-details__character-origin-name">{character.origin.name}</p>
			</div>
		</div>
	);
};

export default CharacterDetails;
