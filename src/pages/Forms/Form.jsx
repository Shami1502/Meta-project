import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Make the API call to submit the form data
    submitAPI(values)
      .then((response) => {
        // Process the response data as needed
        setAvailableTimes(response.availableTimes);
        // Redirect to the confirmation page
        // You can use a routing library like React Router for this
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <h1>Book Now</h1>
      <Formik
        initialValues={{
          date: '',
          time: '',
          guests: 1,
          occasion: 'Birthday',
        }}
        validationSchema={Yup.object({
          date: Yup.string().required('Date is required'),
          time: Yup.string().required('Time is required'),
          guests: Yup.number()
            .required('Number of guests is required')
            .min(1, 'Number of guests must be at least 1')
            .max(10, 'Number of guests cannot exceed 10'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="date">Date</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <Field as="select" id="time" name="time">
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="guests">Number of guests</label>
            <Field type="number" id="guests" name="guests" min="1" max="10" />
            <ErrorMessage name="guests" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Make Your Reservation
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Main;