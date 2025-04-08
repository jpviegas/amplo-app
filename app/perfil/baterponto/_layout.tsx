import { Stack } from "expo-router";

export default function BaterPontoLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="registrar" options={{ headerShown: false }} />
      <Stack.Screen name="historico" options={{ headerShown: false }} />
    </Stack>
  );
}
