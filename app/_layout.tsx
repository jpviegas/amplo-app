import "@/global.css";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { NAV_THEME } from "@/lib/constants";
import { useColorScheme } from "@/lib/useColorScheme";
import { AuthProvider } from "@/utils/authContext";
import toastConfig from "@/utils/toastConfig";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
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
      <ThemeProvider value={LIGHT_THEME}>
        <StatusBar style={"auto"} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="menu" options={{ headerShown: false }} />
          <Stack.Screen
            name="primeiro-acesso"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <PortalHost />
        <Toast position="top" config={toastConfig} />
      </ThemeProvider>
    </AuthProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? useEffect
    : useLayoutEffect;
