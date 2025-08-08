import { Stack } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { Platform } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function MenuPrincipalLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="assinatura" options={{ headerShown: false }} />
      <Stack.Screen name="atendimento" options={{ headerShown: false }} />
      <Stack.Screen name="aviso" options={{ headerShown: false }} />
      <Stack.Screen name="baterponto" options={{ headerShown: false }} />
      <Stack.Screen name="dadospessoais" options={{ headerShown: false }} />
      <Stack.Screen name="documentos" options={{ headerShown: false }} />
      <Stack.Screen name="pagamentos" options={{ headerShown: false }} />
      <Stack.Screen name="treinamentos" options={{ headerShown: false }} />
    </Stack>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? useEffect
    : useLayoutEffect;
