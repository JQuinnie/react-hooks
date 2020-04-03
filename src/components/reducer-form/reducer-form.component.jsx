/* eslint-disable jsx-a11y/accessible-emoji, default-case, no-fallthrough */
import React, { useReducer } from 'react';

import Footer from '../footer.component';

const actions = {
  nameChanged: 'NAME_CHANGED',
  emailChanged: 'EMAIL_CHANGED',
  formSubmitted: 'FORM_SUBMITTED'
};

const initialState = {
  name: '',
  email: '',
  nameError: null,
  emailError: null,
  formCompleted: false,
  formSubmitted: false
};

// submitAttempted boolean is only used to show or hide the error messages in the FSM form, no checks are done on it to determine what state we're in
const initialStateFSM = {
  name: '',
  email: '',
  nameError: null,
  emailError: null,
  submitAttempted: false,
  submitMessage: '',
  status: 'clean'
};

// this helper function validates the name and email inputs
// if there's an error, it returns an error message describing the problem
// if there are no errors, it returns null
// it's outside our reducer to make things more readable and DRY
function validate(name, value) {
  if (typeof value === 'string') value = value.trim();
  switch (name) {
    case 'name':
      if (value.length === 0) {
        return 'Must enter name';
      } else if (value.split(' ').length < 2) {
        return 'Must enter first and last name';
      } else {
        return null;
      }
      break;
    case 'email':
      if (value.length === 0) {
        return 'Must enter email';
      } else if (!value.includes('@') || !value.includes('.') || value.split('.')[1].length < 2) {
        return 'Must enter valid email';
      } else {
        return null;
      }
      break;
  }
}

function formReducer(state, action) {
  let error;

  switch (action.type) {
    case actions.nameChanged:
      error = validate('name', action.payload);
      return { ...state, name: action.payload, nameError: error };
    case actions.emailChanged:
      error = validate('email', action.payload);
      return { ...state, email: action.payload, emailError: error };
    case actions.formSubmitted:
      // if the form has been successfully submitted,
      // stop here to prevent rage clicks and re-submissions
      if (state.formCompleted) return state;
      let formValid = true;
      // invalidate the form if values are missing or in error
      if (state.nameError || !state.name || state.emailError || !state.email) {
        formValid = false;
      }
      // if the user has attempted to submit before, stop here
      if (state.formSubmitted) return { ...state, formCompleted: formValid };
      // if this is the first submit, we need to validate in case the user
      // clicked submit without typing anything
      let nameError = validate('name', state.name);
      let emailError = validate('email', state.email);
      return {
        ...state,
        nameError,
        emailError,
        formSubmitted: true,
        formCompleted: formValid
      };
    default:
      return state;
  }
}

// Deliberately not use break in every case so that we can match multiple cases
// Clean - User hasn’t entered anything or pressed submit
// Dirty - User has started to enter info, but hasn’t successfully finished and submitted
// Completed - Form has been filled out correctly and submitted
function formReducerFSM(state, action) {
  let error;
  switch (state.status) {
    case 'dirty':
      switch (action.type) {
        case actions.formSubmitted:
          let formValid = true;
          let nameError = validate('name', state.name);
          let emailError = validate('email', state.email);
          if (nameError || !state.name || emailError || !state.email) {
            formValid = false;
          }
          return {
            ...state,
            nameError,
            emailError,
            submitAttempted: true,
            status: formValid ? 'completed' : 'dirty',
            submitMessage: formValid ? 'Form Submitted Successfully' : 'Form Has Errors'
          };
      }
    // no 'break' or 'return', case 'dirty' continues!
    case 'clean':
      switch (action.type) {
        case actions.nameChanged:
          error = validate('name', action.payload);
          return {
            ...state,
            name: action.payload,
            nameError: error,
            submitMessage: '',
            status: 'dirty'
          };
        case actions.emailChanged:
          error = validate('email', action.payload);
          return {
            ...state,
            email: action.payload,
            emailError: error,
            submitMessage: '',
            status: 'dirty'
          };
        case actions.formSubmitted:
          return {
            ...state,
            submitMessage: 'Please fill out the form'
          };
        default:
          return state;
      }
    case 'completed':
    // no 'break' or 'return', case 'completed' continues!
    default:
      return state;
  }
}

function ReducerForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // extract our dispatch to a change handler to DRY the code up
  function handleChange(e) {
    dispatch({ type: actions[e.target.name + 'Changed'], payload: e.target.value });
  }

  // this is attached to the form, not the submit button so that
  // the user can click OR press 'enter' to submit
  // we don't need a payload, the input values are already in state
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: actions.formSubmitted });
  }

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  // this adds a red outline to the input if the field isn't filled out correctly,
  // but only if the user has attempted to submit
  const inputStyle = hasError => {
    return {
      outline: hasError && state.formSubmitted ? '2px solid red' : 'none'
    };
  };
  return (
    <div>
      <h1>Fill A Reducer Form:</h1>
      <h3 style={{ color: 'red' }}>⚠️ Can edit the form after submit ⚠️</h3>
      <form style={{ ...columnStyle, width: '300px' }} onSubmit={handleSubmit}>
        <label style={columnStyle}>
          <span>Name:</span>
          <input
            style={inputStyle(state.nameError)}
            onChange={handleChange}
            name="name"
            value={state.name}
            type="text"
          />
          <span>{state.formSubmitted && state.nameError}</span>
        </label>
        <label style={columnStyle}>
          <span>email:</span>
          <input
            style={inputStyle(state.emailError)}
            onChange={handleChange}
            name="email"
            value={state.email}
            type="text"
          />
          <span>{state.formSubmitted && state.emailError}</span>
        </label>
        <p>{state.formCompleted && 'Form Submitted Successfully!'}</p>
        <button type="submit">Submit</button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </form>
    </div>
  );
}

function ReducerFormFSM() {
  const [state, dispatch] = React.useReducer(formReducerFSM, initialStateFSM);

  function handleChange({ target: { name, value } }) {
    dispatch({ type: actions[name + 'Changed'], payload: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: actions.formSubmitted });
  }

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  const inputStyle = hasError => {
    return {
      outline: hasError && state.submitAttempted ? '2px solid red' : 'none'
    };
  };
  return (
    <div>
      <h3 style={{ color: 'green' }}>Can not edit the form after submit due to Finite State Machin (FSM)</h3>
      <form style={{ ...columnStyle, width: '300px' }} onSubmit={handleSubmit}>
        <label style={columnStyle}>
          <span>Name:</span>
          <input
            style={inputStyle(state.nameError)}
            onChange={handleChange}
            name="name"
            value={state.name}
            type="text"
          />
          <span>{state.submitAttempted && state.nameError}</span>
        </label>
        <label style={columnStyle}>
          <span>email:</span>
          <input
            style={inputStyle(state.emailError)}
            onChange={handleChange}
            name="email"
            value={state.email}
            type="text"
          />
          <span>{state.submitAttempted && state.emailError}</span>
        </label>
        <p>{state.submitMessage}</p>
        <button type="submit">Submit</button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </form>
    </div>
  );
}

const ReducerForms = () => (
  <div>
    <ReducerForm />
    <hr />
    <ReducerFormFSM />
    <Footer />
  </div>
);

export default ReducerForms;
