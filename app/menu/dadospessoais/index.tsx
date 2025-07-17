import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import LoadingScreen from "@/components/LoadingScreen";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/conecta.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <Text className="text-center text-4xl font-bold">Dados Pessoais</Text>
          <View className="h-4/5">
            <View className="mx-4 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/dadospessoais/editar-perfil">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/perfil.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Perfil</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/dadospessoais/alterar-senha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <Lock
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text>Alterar Senha</Text>
                  </CardContent>
                </Link>
              </Card>
              <View className="flex-1 bg-transparent"></View>
            </View>
          </View>
          <BackButton />
        </View>
      </View>
    </ThemedContainer>
  );
}
