import { useQuery } from 'react-query';
import { getSingleLocation } from 'api/location';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../details/LocationDetails.scss';

const LocationDetails = () => {
	const { locationId } = useParams();
	const { data: location } = useQuery(['single-location', locationId], async () => {
		const { data } = await getSingleLocation(locationId);
		return data;
	});

	// const residentId = location?.residents.url.replace('https://rickandmortyapi.com/api/location/', '');

	// const { data: location } = useQuery(
	// 	['single-location', locationId],
	// 	async () => {
	// 		const { data } = await getSingleLocation(locationId);
	// 		return data;
	// 	},
	// 	{
	// 		enabled: Boolean(locationId),
	// 	}
	// );


	return (
		<>
			{/* location-details */}
			<div className="location-details__location">
				<div className="location-details__location-content">
					<h2 className="location-details__location-name">{location?.name}</h2>
					<div className="location-details__location-type">{location?.type}</div>
					<div className="location-details__location-dimension">{location?.dimension}</div>
				</div>
			</div>

			{/* residents */}
			<div className="location-details__residents">
				<div className="location-details__residents-content">
					<h2 className="location-details__residents-name">{location?.residents}</h2>
					
				</div>

			</div>


		</>
	);
};

export default LocationDetails;
