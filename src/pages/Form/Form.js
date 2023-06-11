import React from "react";
import Input from "../../components/Input/Input";
import { formSchema } from "../../validations/form.validation";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import "./Form.css";

const Form = () => {
  const blogs = [
    {
      fullName: "dattt",
      email: "oooo@eeeweail.com",
      password: "544ww22",
      url: "https://gttterregle.com",
    },
    {
      fullName: "damyee",
      email: "oooo@gmail.com",
      password: "5443422",
      url: "https://google.com",
    },
  ];

  const isEdit = blogs[0].fullName;

  const formik = useFormik({
    initialValues: {
      fullName: blogs[0].fullName || "",
      email: blogs[0].email || "",
      password: blogs[0].password || "",
      url: blogs[0].url || "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      if (isEdit) {
        blogs[0] = values;
      } else {
        blogs.push(values);
      }
    },
  });

  console.log(blogs);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        placeholder="Full name"
        name="fullName"
        id="fullName"
        value={formik.values.fullName}
        defaultValue={formik.values.fullName}
        label="Full Name"
        error={formik.errors.fullName}
        onChange={formik.handleChange}
      />
      <Input
        type="email"
        placeholder="email@gmail.com"
        name="email"
        id="email"
        label="Email"
        value={formik.values.email}
        defaultValue={formik.values.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
      />
      <Input
        type="password"
        placeholder="*********"
        name="password"
        id="password"
        label="Password"
        value={formik.values.password}
        defaultValue={formik.values.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
      />
      <Input
        type="url"
        placeholder="https://"
        name="url"
        id="url"
        label="Url"
        value={formik.values.url}
        defaultValue={formik.values.url}
        error={formik.errors.url}
        onChange={formik.handleChange}
      />
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default Form;
