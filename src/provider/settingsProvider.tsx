import { createContext, useState } from "react";

export const SettingsContext = createContext({});

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [close, setClose] = useState(false);

  return (
    <SettingsContext.Provider value={{ close, setClose }}>
      {children}
    </SettingsContext.Provider>
  );
}
