import { useContext, useEffect, useState } from "react";
import CirclePlusIcon from "../assets/icons/CirclePlusIcon";
import Label from "./Label";
import TaskItem from "./TaskItem";
import { TODO_URL } from "../utils/apiEndpoint";
import axios from "axios";
import { AuthContext } from "../provider/authProvider";
import NoTask from "./NoTask";

export interface iGroupTask {
  id?: number;
  title?: string;
  description?: string;
}
export default function GroupTask({
  id = 0,
  title = "Title",
  description = "This is description",
}: iGroupTask) {
  const { auth } = useContext<any>(AuthContext);
  const [taskItems, setTaskItem] = useState<any>(null);

  const getTaskItem = (id: number) => {
    axios
      .get(`${TODO_URL}/${id}/items`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => setTaskItem(res.data));
  };

  useEffect(() => {
    getTaskItem(id);
  }, []);

  return (
    <div className="p-4 rounded border border-primary-main bg-primary-surface flex flex-col gap-2 w-[294px]">
      <Label>{title}</Label>
      <p className="s-bold text-neutral-90">{description}</p>
      {taskItems?.length > 0 ? (
        taskItems.map((item: any) => (
          <TaskItem
            key={item.id}
            name={item.name}
            percentage={item.progress_percentage}
          />
        ))
      ) : (
        <NoTask />
      )}
      <div className="flex gap-[5px] items-center cursor-pointer">
        <CirclePlusIcon />
        <span className="s-regular">New Task</span>
      </div>
    </div>
  );
}
