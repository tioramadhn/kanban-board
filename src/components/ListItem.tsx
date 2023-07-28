import { useContext } from "react";
import { GroupContext } from "../provider/groupContext";
import { TaskContext } from "../provider/taskProvider";

export interface iMenu {
  icon: JSX.Element;
  name: string;
  action: "edit" | "delete" | "move-right" | "move-left";
}
export default function ListItem({ menu }: { menu?: iMenu }) {
  const { groupId } = useContext<any>(GroupContext);
  const { taskId } = useContext<any>(TaskContext);

  return (
    <div
      className="px-4 flex gap-4 h-9 items-center cursor-pointer group"
      onClick={() => alert(menu?.action + " " + groupId + " " + taskId)}
    >
      {menu?.icon}
      <span
        className={`${
          menu?.action == "delete"
            ? "group-hover:text-danger-main"
            : "group-hover:text-primary-main"
        } font-[600] text-sm leading-6 tracking-[0.2px]`}
      >
        {menu?.name}
      </span>
    </div>
  );
}
