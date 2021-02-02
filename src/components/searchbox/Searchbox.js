import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import styles from './searchbox.module.scss';

const initialValues = {
  search: '',
};
const validationSchema = Yup.object({
  search: Yup.string().required('search value is required'),
});
const onSubmit = (values, submitProps, submitCb) => {
  submitCb(values.search);
  setTimeout(() => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }, 1000);
};
const Searchbox = ({ submitCb }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount={false}
      validateOnBlur={false}
      validateOnChange
      onSubmit={(values, submitProps) =>
        onSubmit(values, submitProps, submitCb)
      }
    >
      {formik => {
        return (
          <Form noValidate className={styles.form}>
            <div className={styles.searchbox}>
              <Field
                type='text'
                placeholder='enter game name'
                name='search'
                className={styles.input}
              />
              <button
                type='submit'
                className={styles.submit}
                disabled={
                  formik.isSubmitting || (formik.dirty && !formik.isValid)
                }
              >
                {' '}
                search{' '}
              </button>
            </div>
            <ErrorMessage
              name='search'
              component='p'
              className={styles.error}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
Searchbox.defaultProps = {
  submitCb: () => {},
};
Searchbox.propTypes = {
  submitCb: PropTypes.func,
};
export default Searchbox;
