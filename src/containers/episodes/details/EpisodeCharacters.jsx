import useEpisodeCharacters from '../useEpisodeCharacters';
import './EpisodeCharacters.scss';

const EpisodeCharacters = ({ charactersIds }) => {
	const { characters } = useEpisodeCharacters(charactersIds);
	return (
		<>
			<div className="episode__characters">
				{characters?.map((character) => (
					<div className="episode__characters-character">
						<div className="episode__characters-character-image">
							<img src={character.image} alt={character.name} />
						</div>
						<div className="episode__characters-character-content">
							<h2 className="episode__characters-character-name">
								{character.name}
								{character.id}
							</h2>
							<div className="episode__characters-character-status">
								{character.status} - {character.species}
							</div>
							<div className="episode__characters-character-location">Last known location:</div>
							<p className="episode__characters-character-location-name">{character.location.name}</p>
							<div className="episode__characters-character-origin">First seen in:</div>
							<p className="episode__characters-character-origin-name">{character.origin.name}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default EpisodeCharacters;
