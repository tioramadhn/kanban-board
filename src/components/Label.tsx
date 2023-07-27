export default function Label({
  children,
  style = "primary",
}: {
  children: React.ReactNode;
  style?: "primary" | "secondary" | "danger" | "success";
}) {
  const styles = {
    primary: `bg-primary-surface text-primary-main border border-primary-border`,
    secondary: `bg-secondary-surface text-secondary-main border border-secondary-border`,
    danger: `bg-danger-surface text-danger-main border border-danger-border`,
    success: `bg-success-surface text-success-main border border-success-border`,
  };
  return (
    <div
      className={`border py-[2px] px-2 rounded w-fit ${styles[style]} s-regular`}
    >
      {children}
    </div>
  );
}
