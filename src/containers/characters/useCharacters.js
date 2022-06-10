import { useQuery } from 'react-query';
import { getAllCharacters } from 'api/character';

export const useCharacters = (values) => {
	const {
		data: characters,
		status: charactersStatus,
	} = useQuery(['all-characters', values], async () => {
		const { data } = await getAllCharacters(values);
		return data.results;
	});

	const nameOptions = [
		{
			value: '',
			input: 'text',
		},
	];

	const statusOptions = [
		{
			value: '',
			label: 'All',
		},
		{
			value: 'alive',
			label: 'Alive',
		},
		{
			value: 'dead',
			label: 'Dead',
		},
		{
			value: 'unknown',
			label: 'Unknown',
		},
	];

	const genderOptions = [
		{
			value: '',
			label: 'All',
		},
		{
			value: 'female',
			label: 'Female',
		},
		{
			value: 'male',
			label: 'Male',
		},
		{
			value: 'genderless',
			label: 'Genderless',
		},
		{
			value: 'unknown',
			label: 'Unknown',
		},
	];

	return { characters, charactersStatus, statusOptions, genderOptions, nameOptions };
};
