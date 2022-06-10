import { useQuery } from 'react-query';
import { getSingleLocation } from 'api/location';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import "../details/LocationDetails.scss"

const LocationDetails = () => {
  const { locationId } = useParams();
  const { data: location } = useQuery(['single-location', locationId], async () => {
		const { data } = await getSingleLocation(locationId);
		return data;
	});

    return ( 
        <div className="location-details__location">
        <div className="location-details__location-content">
            <h2 className="location-details__location-name">{location?.name}</h2>
            <div className="locations__location-type">{location?.type}</div>
            <div className="locations__location-dimension">{location?.dimension}</div>  
        </div>
    </div>
     );
}
 
export default LocationDetails;