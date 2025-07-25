import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function BaterPontoLayout() {
  const authState = useContext(AuthContext);
  if (!authState.isLoggedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="abono" options={{ headerShown: false }} />
      <Stack.Screen name="confirmar" options={{ headerShown: false }} />
      <Stack.Screen name="espelho" options={{ headerShown: false }} />
      <Stack.Screen name="historico" options={{ headerShown: false }} />
      <Stack.Screen name="registrar" options={{ headerShown: false }} />
    </Stack>
  );
}
