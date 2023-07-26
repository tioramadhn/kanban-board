interface iInput {
  label?: string;
  type?: string;
  placeholder?: string;
  style?: string;
  name: string;
  register: any;
  error?: string;
}

interface iStyles {
  [key: string]: string;
}
export default function Input({
  label = "Label",
  type = "text",
  placeholder = "Please Input",
  style = "primary",
  name,
  register,
  error,
}: iInput) {
  const styles: iStyles = {
    primary: "caret-primary-main focus:ring-primary-main",
    danger: "caret-danger-main focus:ring-danger-main",
  };
  return (
    <label className="s-regular text-neutral-90 flex flex-col gap-2">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles[style]} border rounded-lg px-4 py-2 m-regular outline-none  focus:ring-2`}
        name={name}
        {...register}
      />
      {error && <span className="s-regular text-danger-main">{error}</span>}
    </label>
  );
}
