import { useQuery } from 'react-query';
import { getMultipleCharacters } from 'api/character';

export const useLocationResidents = (ids) => {
	const { data: characters, status: charactersStatus } = useQuery(
		['multiple-characters', ids],
		async () => {
			const { data } = await getMultipleCharacters(ids);
			return data;
		},
		{ enabled: Boolean(ids) }
	);

	return { characters, charactersStatus };
};
