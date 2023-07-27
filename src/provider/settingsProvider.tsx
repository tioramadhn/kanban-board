import { createContext, useState } from "react";

export const SettingsContext = createContext({});

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <SettingsContext.Provider value={{ open, setOpen }}>
      {children}
    </SettingsContext.Provider>
  );
}
