import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function PagamentosLayout() {
  const authState = useContext(AuthContext);
  if (!authState.isLoggedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="holerite" options={{ headerShown: false }} />
      <Stack.Screen name="refeicao" options={{ headerShown: false }} />
      <Stack.Screen name="rendimento" options={{ headerShown: false }} />
      <Stack.Screen name="transporte" options={{ headerShown: false }} />
    </Stack>
  );
}
