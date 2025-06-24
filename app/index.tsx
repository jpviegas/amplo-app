import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("name");
        if (value !== null) {
          return router.replace("/perfil");
        }
      } catch (e) {}
    };

    getData();
  }, []);

  return (
    <ThemedContainer>
      <View className="h-4/5 w-11/12 justify-around">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <Text className="text-center text-2xl font-bold text-primary">
          Acessar o App
        </Text>
        <Text>
          Para acessar todos os serviços do app, é necessário possuir uma conta
        </Text>
        <View>
          <Link asChild href={"/acesso"}>
            <Button className="mt-5 w-4/5 self-center" size={"full"}>
              <Text>JÁ POSSUO ACESSO</Text>
            </Button>
          </Link>
          <Link asChild href={"/cadastro"}>
            <Button
              className="mt-5 w-4/5 self-center bg-inherit"
              size={"full"}
              variant={"outline"}
            >
              <Text className="text-primary">NÃO POSSUO ACESSO</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedContainer>
  );
}
