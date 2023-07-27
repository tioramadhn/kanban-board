import { SettingsIcon } from "../assets/icons";
import Progressbar from "./Progressbar";

export default function TaskItem() {
  return (
    <div className="p-4 border border-neutral-40 bg-neutral-20 rounded flex flex-col gap-2">
      <h4 className="m-bold">Title</h4>
      <div className="border-b border-dashed border-neutral-40"></div>
      <div className="flex justify-between items-center">
        <Progressbar />
        <SettingsIcon />
      </div>
    </div>
  );
}
