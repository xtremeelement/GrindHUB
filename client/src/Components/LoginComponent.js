import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

import asyncValidate from "./asyncValidate";
import validate from "./validate";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const MaterialUiForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="Email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Password" />
      </div>

      <div>
        <Field name="role" component={renderRadioGroup}>
          <RadioButton value="employee" label="Employee" />
          <RadioButton value="employer" label="Employer" />
        </Field>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm);
