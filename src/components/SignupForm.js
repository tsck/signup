import React from "react";
import Form from "./Form";
import getSignupFormConfig from "./../formConfigs/getSignupFormConfig";

function SignupForm() {
  function onSubmit(data, e) {
    console.log(data);
  }

  function onError(data, e) {}

  return (
    <Form
      getConfig={getSignupFormConfig}
      onSubmit={onSubmit}
      onError={onError}
    />
  );
}

export default SignupForm;
