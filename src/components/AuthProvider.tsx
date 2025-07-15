'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

type AuthContextType = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
