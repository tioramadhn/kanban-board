export default function Label({
  children,
  styleIdx,
}: {
  children: React.ReactNode;
  styleIdx: number;
}) {
  const style =
    (styleIdx + 1) % 4 == 1
      ? "border-primary-main bg-primary-surface text-primary-main"
      : (styleIdx + 1) % 4 == 2
      ? "border-secondary-main bg-secondary-surface text-secondary-main"
      : (styleIdx + 1) % 4 == 3
      ? "border-danger-main bg-danger-surface text-danger-main"
      : (styleIdx + 1) % 4 == 0
      ? "border-success-main bg-success-surface text-success-main"
      : "";
  return (
    <div className={`border py-[2px] px-2 rounded w-fit ${style} s-regular`}>
      {children}
    </div>
  );
}
