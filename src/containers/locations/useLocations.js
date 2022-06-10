import { useQuery } from 'react-query';
import { getAllLocations } from 'api/location';

export const useLocations = (values) => {
	const { data: locations, status: locationsStatus } = useQuery(['all-locations', values], async () => {
		const { data } = await getAllLocations();
		return data.results;
	});

	return { locations, locationsStatus };
};
