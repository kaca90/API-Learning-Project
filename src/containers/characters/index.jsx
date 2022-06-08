import './characters.scss';

import { useQuery } from 'react-query';
import DashobardCharacter from './Character/Character';
import { getAllCharacters } from 'api/character';

const Characters = () => {
	const { data: characters, status: charactersStatus } = useQuery('fetch', async () => {
		const { data } = await getAllCharacters();
		return data.results;
	});
	console.log(charactersStatus);

	return (
		<div className="characters">
			<div className="container">
				<div className="characters__characters-grid">
					{characters?.map((character) => (
						<DashobardCharacter key={character.id} {...character} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Characters;
