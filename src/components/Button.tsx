interface iButton {
  children: React.ReactNode;
  variant?: "outlined" | "contained";
  size?: "sm" | "md" | "lg";
  style?: "primary" | "secondary" | "danger" | "success" | "default";
  icon?: React.JSX.Element;
  disabled?: boolean;
  handleClick?: any;
}
export default function Button({
  children,
  style = "primary",
  variant = "contained",
  size = "sm",
  icon,
  disabled = false,
  handleClick,
}: iButton) {
  const variants = {
    contained: {
      primary: `bg-primary-main text-white hover:bg-primary-dark`,
      secondary: `bg-secondary-main text-white hover:bg-secondary-dark`,
      danger: `bg-danger-main text-white hover:bg-danger-dark`,
      success: `bg-success-main text-white hover:bg-success-dark`,
    },
    outlined: {
      primary: `bg-primary-surface text-primary-main border border-primary-border`,
      secondary: `bg-secondary-surface text-secondary-main border border-secondary-border`,
      danger: `bg-danger-surface text-danger-main border border-danger-border`,
      success: `bg-success-surface text-success-main border border-success-border`,
    },
  };

  const text = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`shadow-button px-4 py-1 rounded-lg ${
        style == "default"
          ? `bg-white text-neutral-100 border border-neutral-40`
          : variants[variant][style]
      } ${text[size]} font-bold flex gap-1 items-center ${
        disabled ? null : "cursor-pointer"
      } shadow-sm  focus:ring-2 ring-gray-200 justify-center`}
    >
      {icon ?? null}
      {children}
    </button>
  );
}
