import { useContext, useEffect, useState } from "react";
import GroupTask, { iGroupTask } from "./GroupTask";
import { AuthContext } from "../provider/authProvider";
import axios from "axios";
import { TODO_URL } from "../utils/apiEndpoint";
import useSWR from "swr";
import GroupProvider from "../provider/groupContext";

export default function Board() {
  const { auth } = useContext<any>(AuthContext);
  const [groupTask, setGroupTask] = useState<iGroupTask[]>([]);

  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => res.data);

  const { data } = useSWR(TODO_URL, fetcher);

  useEffect(() => {
    if (auth && data) {
      setGroupTask(data);
    }
  }, [auth, data]);

  return (
    <div className="overflow-x-auto">
      <div className="p-6 flex gap-4 w-fit min-h-screen items-start">
        {groupTask
          ? groupTask.map((item) => (
              <GroupProvider key={item.id}>
                <GroupTask
                  id={item.id}
                  title={item.title}
                  description={item.description}
                />
              </GroupProvider>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
