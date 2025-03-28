import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

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
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label htmlFor={nameUserId}>Name</label>
        <Field type="text" name="name" id={nameUserId} className={s.input} />
        <ErrorMessage name="name" component="span" className={s.error} />

        <label htmlFor={phoneUserId}>Phone</label>
        <Field type="tel" name="number" id={phoneUserId} className={s.input} />
        <ErrorMessage name="number" component="span" className={s.error} />

        <button type="submit" className={s.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
