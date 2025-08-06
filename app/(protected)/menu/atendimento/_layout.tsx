import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function AtendimentoLayout() {
  const authState = useContext(AuthContext);
  if (!authState.isLoggedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="operacional" options={{ headerShown: false }} />
      <Stack.Screen name="ouvidoria" options={{ headerShown: false }} />
      <Stack.Screen name="rh" options={{ headerShown: false }} />
      <Stack.Screen name="sucesso" options={{ headerShown: false }} />
    </Stack>
  );
}
