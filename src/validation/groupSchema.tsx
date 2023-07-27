import * as yup from "yup";

const addGroupSchema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

export { addGroupSchema };
