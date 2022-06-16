import { useQuery } from 'react-query';
import { getSingleEpisode } from 'api/episode';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../details/EpisodeDetails.scss';
// import { useMultipleEpisodes } from '../useMultipleEpisodes';
// import {useCharacters} from '../../characters/useCharacters';
import EpisodeCharacters from './EpisodeCharacters';

const EpisodeDetails = () => {
	// episode
	const { episodeId } = useParams();
	const { data: episode } = useQuery(['single-episode', episodeId], async () => {
		const { data } = await getSingleEpisode(episodeId);
		return data;
	});

	// character
	// const { characters} = useCharacters();
	const charactersIds = episode?.characters.map((character) =>
		character.replace('https://rickandmortyapi.com/api/character/', '')
	);

	return (
		<>
			{/* episode-details */}
			<div className="episode-details__episode">
				<div className="episode-details__episode-content">
					<h2 className="episode-details__episode-name">{episode?.name}</h2>
					<div className="episodedetails__episode-air_date-name">{episode?.air_date}</div>
					<div className="episode-details__episode-episode-name">{episode?.episode}</div>
				</div>
			</div>

			{/* caracters */}
			<div className="episode-details_caracters">
				<div className="episode-details_caracters-content">{<EpisodeCharacters charactersIds={charactersIds} />}</div>
			</div>
		</>
	);
};

export default EpisodeDetails;
