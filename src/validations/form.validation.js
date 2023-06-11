import { object, string } from "yup";

export const formSchema = object({
  fullName: string()
    .matches(/^[a-zA-Z ]*$/, "must be a string")
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter two names")
    .min(3)
    .required("please enter your full name"),
  email: string().email().required(),
  password: string().min(8).max(15).required(),
  url: string().url().required(),
});
