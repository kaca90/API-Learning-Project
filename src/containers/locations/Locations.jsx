import './Locations.scss';
import { useLocations } from './useLocations';
import DashobardLocation from './Location/Location';

const Locations = () => {
	const { locations } = useLocations();

	return (
		<div className="locations">
			<div className="container">
				<div className="locations__locations-grid">
				
					{locations?.map((location) => (
						<DashobardLocation key={location.id} {...location} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Locations;
