import { Field } from 'formik';

// options as { value, label }
const FormikSelectField = ({ className, name, options }) => {
	return (
		<Field as="select" name={name} className={className}>
			{options?.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</Field>
	);
};

export default FormikSelectField;
