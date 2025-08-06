import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function DadosPessoaisLayout() {
  const authState = useContext(AuthContext);
  if (!authState.isLoggedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="alterar-senha" options={{ headerShown: false }} />
      <Stack.Screen name="perfil" options={{ headerShown: false }} />
    </Stack>
  );
}
