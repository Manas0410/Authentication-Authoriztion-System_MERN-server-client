import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../index.css";

interface SignupFormValues {
  email: string;
  name: string;
  role: "normal" | "admin" | "";
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    name: Yup.string().required("Required"),
    role: Yup.string()
      .oneOf(["normal", "admin"], "Invalid Role")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  // Initial form values
  const initialValues: SignupFormValues = {
    email: "",
    name: "",
    role: "",
    password: "",
    confirmPassword: "",
  };

  // Handle form submission
  const onSubmit = (
    values: SignupFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-gray-900 flex p-8 flex-col  w-[520px] rounded-xl">
            <div className="text-gray-300 flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <Field
                className="bg-gray-800 text-white p-3 w-full"
                type="email"
                name="email"
              />
              <ErrorMessage
                className="text-xs text-red-500 font-thin"
                name="email"
                component="div"
              />
            </div>
            <div className="text-gray-300 flex flex-col items-start">
              <label htmlFor="name">Name</label>
              <Field
                className="bg-gray-800 text-white p-3 w-full"
                type="text"
                name="name"
              />
              <ErrorMessage
                className="text-xs text-red-500 font-thin"
                name="name"
                component="div"
              />
            </div>
            <div className="text-gray-300 flex flex-col items-start">
              <label htmlFor="role">Role</label>
              <Field
                className="bg-gray-800 text-white p-3 w-full"
                as="select"
                name="role"
              >
                <option value="" label="Select role" />
                <option value="normal" label="Normal" />
                <option value="admin" label="Admin" />
              </Field>
              <ErrorMessage
                className="text-xs text-red-500 font-thin"
                name="role"
                component="div"
              />
            </div>
            <div className="text-gray-300 flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <Field
                className="bg-gray-800 text-white p-3 w-full"
                type="password"
                name="password"
              />
              <ErrorMessage
                className="text-xs text-red-500 font-thin"
                name="password"
                component="div"
              />
            </div>
            <div className="text-gray-300 flex flex-col items-start">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                className="bg-gray-800 text-white p-3 w-full"
                type="password"
                name="confirmPassword"
              />
              <ErrorMessage
                className="text-xs text-red-500 font-thin"
                name="confirmPassword"
                component="div"
              />
            </div>
            <div className="text-gray-300 flex flex-col items-start">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
