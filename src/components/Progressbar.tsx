import CheckListIcon from "../assets/icons/CheckListIcon";

export default function Progressbar({ rate = 10 }: { rate?: number }) {
  const isCompleted: boolean = rate == 100;
  return (
    <>
      <div className="w-full h-4 bg-neutral-30 rounded-full mr-3 overflow-hidden ">
        <div
          style={{ width: `${rate}%` }}
          className={`h-full ${
            isCompleted ? "bg-success-main" : "bg-primary-main"
          }`}
        ></div>
      </div>
      {isCompleted ? (
        <CheckListIcon />
      ) : (
        <span className="font-[400] text-xs leading-4 text-neutral-70">
          {rate}%
        </span>
      )}
    </>
  );
}
