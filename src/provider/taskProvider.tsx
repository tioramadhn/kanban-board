import { createContext, useState } from "react";

export const TaskContext = createContext({});

export default function TaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [task, setTask] = useState<number>();

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}
