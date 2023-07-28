import { createContext, useState } from "react";

export const GroupContext = createContext({});

export default function GroupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [groupId, setGroupId] = useState<number>();

  return (
    <GroupContext.Provider value={{ groupId, setGroupId }}>
      {children}
    </GroupContext.Provider>
  );
}
