import * as yup from "yup";

const taskItemSchema = yup
  .object({
    name: yup.string().required(),
    progress_percentage: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(0)
      .max(100)
      .required(),
  })
  .required();

export { taskItemSchema };
