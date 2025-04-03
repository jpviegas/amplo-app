import { HapticTab } from "@/components/HapticTab";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";
import { MapPin } from "lucide-react-native";
import { Platform } from "react-native";

export default function PerfilLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
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
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="baterponto"
        options={{
          title: "Bater Ponto",
          tabBarIcon: ({ color }) => <MapPin color={color} />,
        }}
      />
      <Tabs.Screen
        name="dadospessoais"
        options={{
          title: "Dados Pessoais",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
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
