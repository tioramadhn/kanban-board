import { useContext } from "react";
import { listSettings } from "../utils/listSettings";
import ListItem from "./ListItem";
import { GroupContext } from "../provider/groupContext";

export default function ListMenu({ handleOpen }: any) {
  const { groupId } = useContext<any>(GroupContext);
  const renderedList = !groupId.nextId
    ? listSettings.filter((_, idx) => !groupId.nextId && idx != 0)
    : !groupId.prevId
    ? listSettings.filter((_, idx) => !groupId.prevId && idx != 1)
    : listSettings;

  return (
    <div className="box-menu py-2 w-[50vw] md:w-[320px] rounded-lg flex flex-col shadow absolute bottom-[-20] left-0 z-[999] bg-white">
      {renderedList.map((item, idx) => (
        <ListItem menu={item} key={idx} handleOpen={handleOpen} />
      ))}
    </div>
  );
}
