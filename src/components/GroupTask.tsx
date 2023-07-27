import CirclePlusIcon from "../assets/icons/CirclePlusIcon";
import Label from "./Label";
import TaskItem from "./TaskItem";

export interface iGroupTask {
  title?: string;
  description?: string;
}
export default function GroupTask({
  title = "Title",
  description = "This is description",
}: iGroupTask) {
  return (
    <div className="p-4 rounded border flex flex-col gap-2 w-[294px]">
      <Label>{title}</Label>
      <p className="s-bold text-neutral-90">{description}</p>
      <TaskItem />
      <div className="flex gap-[5px] items-center cursor-pointer">
        <CirclePlusIcon />
        <span className="s-regular">New Task</span>
      </div>
    </div>
  );
}
