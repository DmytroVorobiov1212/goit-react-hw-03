import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { formatPhoneNumber } from '../../assets/js/formatPhoneNumber';
import clsx from 'clsx';

const ContactForm = ({ onAdd }) => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),

    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'The number must be in the format 123-45-67!'
      )
      .required('Required'),
  });
  const handleSubmit = (values, actions) => {
    const newContactUser = {
      id: nanoid(),
      ...values,
    };
    onAdd(newContactUser);
    actions.resetForm();
  };
  const nameUserId = useId();
  const phoneUserId = useId();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor={nameUserId}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={nameUserId}
              className={clsx(s.input, {
                [s.inputError]: errors.name && touched.name,
                [s.inputValid]: !errors.name && touched.name,
              })}
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>

          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor={phoneUserId}>
              Phone
            </label>
            <Field name="number">
              {({ field }) => (
                <input
                  {...field}
                  type="tel"
                  id={phoneUserId}
                  className={clsx(s.input, {
                    [s.inputError]: errors.number && touched.number,
                    [s.inputValid]: !errors.number && touched.number,
                  })}
                  value={values.number}
                  onChange={e => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setFieldValue('number', formatted);
                  }}
                  placeholder="123-45-67"
                />
              )}
            </Field>
            <ErrorMessage name="number" component="span" className={s.error} />
          </div>

          <button type="submit" className={s.button}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
