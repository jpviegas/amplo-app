import { HapticTab } from "@/components/HapticTab";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link, Tabs } from "expo-router";
import { Home, MapPin, User } from "lucide-react-native";
import { Platform } from "react-native";

export default function PerfilLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
        headerLeft: () => (
          <Link href={".."} className="left-12" asChild>
            <Button size="sm">
              <Text>Voltar</Text>
            </Button>
          </Link>
        ),
        headerRight: () => <ThemeToggle />,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <Home size={28} color={color} strokeWidth={focused ? 2 : 1} />
          ),
        }}
      />
      <Tabs.Screen
        name="baterponto"
        options={{
          title: "Bater Ponto",
          tabBarIcon: ({ color, focused }) => (
            <MapPin size={28} color={color} strokeWidth={focused ? 2 : 1} />
          ),
        }}
      />
      <Tabs.Screen
        name="dadospessoais"
        options={{
          title: "Dados Pessoais",
          tabBarIcon: ({ color, focused }) => (
            <User size={28} color={color} strokeWidth={focused ? 2 : 1} />
          ),
        }}
      />
      <Tabs.Screen
        name="folha"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="documentos"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
