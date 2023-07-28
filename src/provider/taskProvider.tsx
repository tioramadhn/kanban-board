import { createContext, useState } from "react";

export const TaskContext = createContext({});

export default function TaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [taskId, setTaskId] = useState<number>();

  return (
    <TaskContext.Provider value={{ taskId, setTaskId }}>
      {children}
    </TaskContext.Provider>
  );
}
