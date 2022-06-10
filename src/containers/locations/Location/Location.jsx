import './Location.scss';
import { Link } from 'react-router-dom';
const Location = ({ id, name, type, dimension}) => {
    return ( 
        <div className="locations__location">
			<div className="locations__location-content">
				<Link to={`/locations/${id}`} className="locations__location-name">
					{name}
				</Link>
				<div className="locations__location-type">{type}</div>
                <div className="locations__location-dimension">{dimension}</div>  
			</div>
		</div>
     );
}
 
export default Location;