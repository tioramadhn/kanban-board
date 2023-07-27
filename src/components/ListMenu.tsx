import { listSettings } from "../utils/listSettings";
import ListItem from "./ListItem";

export default function ListMenu() {
  return (
    <div className="py-2 w-[50vw] md:w-[320px] rounded-lg flex flex-col shadow absolute top-0 right-0 z-[999] bg-white">
      {listSettings.map((item, idx) => (
        <ListItem menu={item} key={idx} />
      ))}
    </div>
  );
}
