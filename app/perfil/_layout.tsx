import { ThemeToggle } from "@/components/ThemeToggle";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { NAV_THEME } from "@/lib/constants";
import { useColorScheme } from "@/lib/useColorScheme";
import { AuthProvider } from "@/utils/authContext";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Platform } from "react-native";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from "expo-router";

export default function PerfilLayout() {
  const [loaded] = useFonts({
    Quicksand: require("@/assets/fonts/Quicksand-Regular.ttf"),
  });
  const hasMounted = useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }
    if (Platform.OS === "web") {
      document.documentElement.classList.add("bg-background");
    }
    setAndroidNavigationBar(colorScheme);
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
    if (loaded) {
      SplashScreen.hide();
    }
  }, []);

  if (!isColorSchemeLoaded || !loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
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
          {/* <Stack.Screen name="dadospessoais" options={{ headerShown: false }} /> */}
          <Stack.Screen name="folha" options={{ headerShown: false }} />
          <Stack.Screen
            name="dadospessoais/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="dadospessoais/perfil"
            options={{ headerShown: false }}
          />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? useEffect
    : useLayoutEffect;
