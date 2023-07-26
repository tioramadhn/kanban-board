import * as yup from "yup";

const authRegistSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    password_confirmation: yup
      .string()
      .min(6)
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required(),
  })
  .required();

const authLoginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export { authLoginSchema, authRegistSchema };
