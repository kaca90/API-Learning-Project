import { Field } from 'formik';

const FormikSearchInputField = ({ className, name }) => {
	return <Field name={name} className={className} />;
};

export default FormikSearchInputField;
