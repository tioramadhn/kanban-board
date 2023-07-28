import { useContext, useEffect, useState } from "react";
import GroupTask from "./GroupTask";
import { AuthContext } from "../provider/authProvider";
import axios from "axios";
import { TODO_URL } from "../utils/apiEndpoint";
import useSWR from "swr";
import GroupProvider from "../provider/groupContext";

export interface iGroup {
  id?: number;
  title?: string;
  description?: string;
}

export default function Board() {
  const { auth } = useContext<any>(AuthContext);
  const [groupTask, setGroupTask] = useState<iGroup[]>([]);

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
          ? groupTask.map((item: iGroup, idx: number) => (
              <GroupProvider key={item?.id}>
                <GroupTask
                  styleIdx={idx}
                  currentId={item?.id}
                  prevId={groupTask[idx - 1]?.id}
                  nextId={groupTask[idx + 1]?.id}
                  title={item?.title}
                  description={item?.description}
                />
              </GroupProvider>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
