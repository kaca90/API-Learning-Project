import './characters.scss';
import Character from './Character/Character';
import { FormikProvider, useFormik } from 'formik';
import FormikSelectField from 'components/form/FormikSelectField/FormikSelectField';
import { useCharacters } from './useCharacters';
import FormikSearchInputField from 'components/form/search/FormikSearchInputField';
import { useDebounce } from 'utils/hooks/useDebounce';

const Characters = () => {
	const formik = useFormik({
		initialValues: {
			status: '',
			gender: '',
			name: '',
		},
		onSubmit: () => {},
		enableReinitialize: true,
	});
	const { values } = formik;
	const debouncedValues = {
		...values,
		name: useDebounce(values.name),
	};

	const { characters, statusOptions, genderOptions } = useCharacters(debouncedValues);

	return (
		<div className="characters">
			<div className="container">
				<div className="characters__filter">
					<FormikProvider value={formik}>
						<span>Search:</span>
						<FormikSearchInputField className="characters__filter-search" name="name" />

						<span>Status:</span>
						<FormikSelectField className="characters__filter-select" name="status" options={statusOptions} />

						<span>Gender:</span>
						<FormikSelectField className="characters__filter-select" name="gender" options={genderOptions} />
					</FormikProvider>
				</div>

				<div className="characters__characters-grid">
					{characters?.map((character) => (
						<Character key={character.id} {...character} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Characters;
