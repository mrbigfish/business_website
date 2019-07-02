import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import createDecorator from 'final-form-focus';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2))
}

/**
 * [***********] [Subscriptions] and [FormSpy] [************]
 * [NOTE]: Subscription allows the developer to subscribe to only
 * those states it absolutely needs so that re-rendering is optimized.
 * This is really ONLY needed when there are over 15 different inputs
 * to the form at a MINIMUM! Only try to use when there is a LOT of
 * input fields to a form! Otherwise, it's not worth the development
 * time spent!
 */

const required = value => (value ? undefined : 'Required')

const focusOnError = createDecorator()

const ContactMe = () => (
  <div>
    <h1>React Final Form</h1>
    <Form 
      onSubmit={showResults}
      decorators={[focusOnError]}
      subscription={{
        submitting: true,
      }}
    >
      {({handleSubmit, values, submitting }) => <form onSubmit={handleSubmit}>
        <Field 
            name="firstName"
            placeholder="First Name" 
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true,
            }}
        >{({ input, meta, placeholder }) => (
          <div className={meta.active ? 'active' : ''} >
            <label>First Name</label>
            <input {...input} placeholder={placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
          )} 
        </Field>
        <Field 
          name="lastName"
          placeholder="Last Name" 
          validate={required}
          subscription={{
            value: true,
            active: true,
            error: true,
            touched: true,
          }}
        >{({ input, meta, placeholder }) => (
          <div className={meta.active ? 'active' : ''} >
            <label>Last Name</label>
            <input {...input} placeholder={placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
          )}
        </Field>
        <Field 
          name="email" 
          placeholder="Email" 
          validate={required}
          subscription={{
            value: true,
            active: true,
            error: true,
            touched: true,
          }}
        >{({ input, meta, placeholder }) => (
          <div className={meta.active ? 'active' : ''} >
            <label>Email</label>
            <input {...input} placeholder={placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
          )}
        </Field>
        <button type="submit" disabled={submitting} >
          Submit
        </button>
        <FormSpy subscription={{ values: true }}>
          {({ values }) => 
          <pre>
            {JSON.stringify(values, undefined, 2)}
          </pre>}
        </FormSpy>
      </form>}
    </Form>
  </div>
)

export default ContactMe;

/**
 * TODO: TO SEE ALL AVAILABLE STATES FROM FIELD, USE THE BELOW:
 * 
 * <Field name="devOnly" placeholder="Only for Development/Learning" validate={required}>{(fieldState) => (<pre>{JSON.stringify(fieldState, undefined, 2)}</pre>)}</Field>
 * 
 */