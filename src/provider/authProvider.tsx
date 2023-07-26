import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
