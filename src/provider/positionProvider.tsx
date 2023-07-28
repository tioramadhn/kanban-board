import { createContext, useState } from "react";

export const PositionContext = createContext({});

export default function PositionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    
  const [position, setPosition] = useState([]);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
}
