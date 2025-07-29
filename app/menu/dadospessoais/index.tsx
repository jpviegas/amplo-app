import BackButton from "@/components/BackButton";
import LoadingScreen from "@/components/LoadingScreen";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { Link } from "expo-router";
import { Lock } from "lucide-react-native";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function DadosPessoais() {
  const { isDarkColorScheme } = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemedContainer title="Dados Pessoais">
      <View className="mx-4 h-4/5">
        <View className="h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/dadospessoais/perfil"}
            icon={require("@/assets/icons/perfil.png")}
            title="Perfil"
          />
          <Card className="flex-1">
            <Link href="/menu/dadospessoais/alterar-senha">
              <CardContent className="py-safe w-full items-center justify-evenly">
                <Lock size={32} color={isDarkColorScheme ? "white" : "black"} />
                <Text>Alterar Senha</Text>
              </CardContent>
            </Link>
          </Card>
          <View className="flex-1" />
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
