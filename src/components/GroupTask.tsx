import CirclePlusIcon from "../assets/icons/CirclePlusIcon";
import Label from "./Label";
import TaskItem from "./TaskItem";

export default function GroupTask() {
  return (
    <div className="p-4 rounded border flex flex-col gap-2">
      <Label>Group task 1</Label>
      <p className="s-bold text-neutral-90">January - March</p>
      <TaskItem />
      <div className="flex gap-[5px] items-center cursor-pointer">
        <CirclePlusIcon />
        <span className="s-regular">New Task</span>
      </div>
    </div>
  );
}
