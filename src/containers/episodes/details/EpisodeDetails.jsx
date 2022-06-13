import { useQuery } from 'react-query';
import { getSingleLocation } from 'api/episode';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../details/EpisodeDetails.scss';

const EpisodeDetails = () => {
    // const { EpisodeId } = useParams();
	// const { data: episode } = useQuery(['single-episode', episodeId], async () => {
	// 	const { data } = await getSingleLocation(episodeId);
	// 	return data;
	// });

    return ( 
        <div className="episode-details__episode">
			{/* <div className="episode-details__episode-content">
				<h2 className="episode-details__episode-name">{episode?.name}</h2>
				<div className="episodedetails__episode-type">{episode?.type}</div>
				<div className="episode-details__episode-dimension">{episode?.dimension}</div>
			</div> */}
		
		</div>
     );
}
 
export default EpisodeDetails;