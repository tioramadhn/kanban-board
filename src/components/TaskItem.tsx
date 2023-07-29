import { useContext, useEffect, useState } from "react";
import { SettingsIcon } from "../assets/icons";
import Progressbar from "./Progressbar";
import ListMenu from "./ListMenu";
import { TaskContext } from "../provider/taskProvider";
import OutsideWrapper from "../hook/useOutsideWrapper";

export default function TaskItem({ id, name, percentage }: any) {
  const [open, setOpen] = useState(false);
  const { setTask } = useContext<any>(TaskContext);

  useEffect(() => {
    if (id) {
      setTask({ id, name, percentage });
    }
  }, [id]);

  return (
    <div className="p-4 border border-neutral-40 bg-neutral-20 rounded flex flex-col gap-2">
      <h4 className="m-bold">{name}</h4>
      <div className="border-b border-dashed border-neutral-40"></div>
      <div className="flex justify-between items-center">
        <Progressbar rate={percentage} />
        <div className="relative ml-[26px]">
          <SettingsIcon open={open} handleOpen={setOpen} />
          {open && (
            <OutsideWrapper callback={() => setOpen(false)}>
              <ListMenu handleOpen={setOpen} />
            </OutsideWrapper>
          )}
        </div>
      </div>
    </div>
  );
}
