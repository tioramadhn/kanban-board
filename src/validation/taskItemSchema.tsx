import * as yup from "yup";

const taskItemSchema = yup
  .object({
    name: yup.string().required(),
    progress_percentage: yup.number().min(0).max(100).required(),
  })
  .required();

export { taskItemSchema };
