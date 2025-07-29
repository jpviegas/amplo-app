import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: () => void;
  logOut: () => void;
};

const authStorageKey = "auth-key";

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonvalue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorageKey, jsonvalue);
    } catch (error) {
      console.log("error", error);
    }
  };

  const logIn = async () => {
    setIsLoggedIn(true);
    await storeAuthState({ isLoggedIn: true });
  };

  const logOut = async () => {
    setIsLoggedIn(false);
    await storeAuthState({ isLoggedIn: false });
    await AsyncStorage.clear();
  };

  useEffect(() => {
    const getAuthFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem(authStorageKey);
        if (value !== null) {
          const auth = JSON.parse(value);
          setIsLoggedIn(auth.isLoggedIn);
        }
      } catch (error) {
        console.log("error", error);
      }
      setIsReady(true);
    };
    getAuthFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isReady, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
