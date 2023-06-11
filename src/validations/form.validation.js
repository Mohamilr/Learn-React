import { object, string } from "yup";

export const formSchema = object({
  fullName: string().min(3).required("please enter you full name"),
  email: string().email().required(),
  password: string().min(8).max(15).required(),
  url: string().url().required(),
});
