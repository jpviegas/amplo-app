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
          // return <Redirect href={'/perfil'}
        }
      } catch (e) {}
    };

    getData();
  }, []);

  return (
    <ThemedContainer>
      <View className="h-4/5 w-5/6 justify-around">
        <Text className="text-center text-2xl font-semibold">
          Acesse sua conta
        </Text>
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View>
          <Link asChild href={"/login"}>
            <Button
              className="mt-5 w-4/5 self-center"
              size={"full"}
              // onPress={() => handleLogin({ email })}
            >
              <Text>ENTRAR</Text>
            </Button>
          </Link>
          <Link asChild href={"/cadastro"}>
            <Button
              className="mt-5 w-4/5 self-center border-primary bg-inherit"
              size={"full"}
              variant={"outline"}
              // onPress={() => handleLogin({ email })}
            >
              <Text>NÃO POSSUO ACESSO</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedContainer>
  );
}
