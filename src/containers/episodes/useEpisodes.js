import { useQuery } from 'react-query';
import { getAllEpisodes } from 'api/episode';

export const useEpisodes = (values) => {
	const { data: episodes, status: episodesStatus } = useQuery(['all-episodes', values], async () => {
		const { data } = await getAllEpisodes(values);
		return data.results;
	});

	const nameOptions = [
		{
			value: '',
			input: 'text',
		},
	];


	return { episodes, episodesStatus, nameOptions};
};
