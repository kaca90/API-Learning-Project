import { Link } from 'react-router-dom';
import './Episode.scss';

const Episode = ({ id, name, air_date, episode }) => {

	return (
		<div className="episodes__episode">
			<div className="episodes__episode-content">
				<Link to={`/episodes/${id}`} className="episodes__episode-name">
					{name}
				</Link>
				<p className="episodes__episode-air_date-name">{air_date}</p>
				<p className="episodes__episode-episode-name">{episode}</p>
			</div>


		</div>
	);
};

export default Episode;
