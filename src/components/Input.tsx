interface iInput {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  register: any;
  error?: string;
  width?: string;
}

interface iStyles {
  [key: string]: string;
}
export default function Input({
  label = "Label",
  type = "text",
  placeholder = "Please Input",
  name,
  register,
  error,
  width,
}: iInput) {
  const styles: iStyles = {
    primary: "caret-primary-main focus:ring-primary-main",
    danger: "caret-danger-main focus:ring-danger-main",
  };
  if (type == "text-area") {
    return (
      <label className="s-regular text-neutral-90 flex flex-col gap-2">
        {label}
        <textarea
          type={type}
          placeholder={placeholder}
          className={`${
            styles[error ? "danger" : "primary"]
          } border rounded-lg px-4 py-2 m-regular outline-none  focus:ring-2`}
          name={name}
          {...register}
        />
        {error && <span className="s-regular text-danger-main">{error}</span>}
      </label>
    );
  }

  const propsNumber = () => {
    if (type == "number") {
      return { min: 0, max: 100 };
    }
  };
  return (
    <label className="s-regular text-neutral-90 flex flex-col gap-2">
      {label}
      <input
        style={{ width: width }}
        type={type}
        {...propsNumber()}
        placeholder={placeholder}
        className={`${
          styles[error ? "danger" : "primary"]
        } border rounded-lg px-4 py-2 m-regular outline-none  focus:ring-2`}
        name={name}
        {...register}
      />
      {error && <span className="s-regular text-danger-main">{error}</span>}
    </label>
  );
}
