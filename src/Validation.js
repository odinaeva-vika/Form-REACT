export default function Validation(values) {
  const errors = {};

  const email_pattern = /^[^s@]+@[^\s@]+.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    errors.name = "Name is Required";
  }

  if (values.email === "") {
    errors.email = "email is Required";
  } else if (!email_pattern.test(values.mail)) {
    errors.email = "Email did not match";
  }

  if (values.password === "") {
    errors.password = "password Required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "password did not match";
  }

  return errors;
}
