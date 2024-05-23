import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface IsighinData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const ValidationSchema = Yup.object({
    email: Yup.string().email("invalid email id").required("required"),
    password: Yup.string()
      .trim()
      .min(8, "minimum 8 chars are req")
      .required("required"),
  });

  const initialValues: IsighinData = {
    email: "",
    password: "",
  };

  const onsubmit = (
    values: IsighinData,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (_: boolean) => void }
  ) => {
    alert(JSON.stringify(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={ValidationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="bg-black">
            <div>
              <label htmlFor="email"></label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                className="text-red-500"
                component={"div"}
              />
            </div>
            <div>
              <label htmlFor=""></label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                className="text-red-500"
                component={"div"}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-500"
            >
              submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Signin;
