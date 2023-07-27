import { useContext, useEffect, useState } from "react";
import GroupTask, { iGroupTask } from "./GroupTask";
import { AuthContext } from "../provider/authProvider";
import axios from "axios";
import { TODO_URL } from "../utils/apiEndpoint";

export default function Board() {
  const { auth } = useContext<any>(AuthContext);
  const [groupTask, setGroupTask] = useState<iGroupTask[]>([]);

  useEffect(() => {
    if (auth) {
      axios
        .get(TODO_URL, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        })
        .then((res) => setGroupTask(res.data));
    }
  }, [auth]);

  return (
    <div className="overflow-x-auto">
      <div className="p-6 flex gap-4 w-fit min-h-[80vh] items-start">
        {groupTask
          ? groupTask.map((item, idx) => (
              <GroupTask
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
