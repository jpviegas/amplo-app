import { ThemeToggle } from "@/components/ThemeToggle";
import { Stack } from "expo-router";

export default function PerfilLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerBackVisible: false,
          headerTitle: () => false,
          headerTransparent: true,
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Stack.Screen name="assinatura" options={{ headerShown: false }} />
      <Stack.Screen name="baterponto" options={{ headerShown: false }} />
      <Stack.Screen name="dadospessoais" options={{ headerShown: false }} />
      <Stack.Screen name="folha" options={{ headerShown: false }} />
    </Stack>
  );
}
