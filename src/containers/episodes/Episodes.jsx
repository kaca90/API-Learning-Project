import './Episodes.scss';
import Episode from './Episode/Episode';
import { useEpisodes } from './useEpisodes';
import { FormikProvider, useFormik } from 'formik';
import FormikSearchInputField from 'components/form/search/FormikSearchInputField';
import { useDebounce } from 'utils/hooks/useDebounce';

const Episodes = () => {
	const formik = useFormik({
		initialValues: {
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

	const { episodes } = useEpisodes(debouncedValues);

	return (
		<div className="episodes">
			<div className="container">
				<div className="episodes__filter">
					<FormikProvider value={formik}>
						<span>Search by Episode Name:</span>
						<FormikSearchInputField className="episodes__filter-search" name="name" />
					</FormikProvider>
				</div>

				<div className="episodes__episodes-grid">
					{episodes?.map((episode) => (
						<Episode key={episode.id} {...episode} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Episodes;
