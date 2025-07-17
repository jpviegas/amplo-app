import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function DocumentosLayout() {
  const authState = useContext(AuthContext);
  if (!authState.isLoggedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="contrato-trabalho" options={{ headerShown: false }} />
      <Stack.Screen name="codigo-conduta" options={{ headerShown: false }} />
      <Stack.Screen name="diversos" options={{ headerShown: false }} />
      <Stack.Screen name="ficha-epi" options={{ headerShown: false }} />
      <Stack.Screen name="ficha-registro" options={{ headerShown: false }} />
      <Stack.Screen name="politica-interna" options={{ headerShown: false }} />
      <Stack.Screen name="saude-ocupacional" options={{ headerShown: false }} />
      <Stack.Screen name="termos" options={{ headerShown: false }} />
    </Stack>
  );
}
