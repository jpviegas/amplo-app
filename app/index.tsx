import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addUser } = useUserStore();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("name");
  //       if (value !== null) {
  //         return router.replace("/perfil");
  //       }
  //     } catch (e) {}
  //   };

  //   getData();
  // }, []);

  async function handleLogin({ email }: { email: string }) {
    try {
      await AsyncStorage.setItem("name", email);
      addUser(email);
      Toast.show({
        text1: "Login com sucesso!",
        topOffset: insets.top === 0 ? 12 : insets.top,
      });
      authContext.logIn();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao tentar login!",
        topOffset: insets.top === 0 ? 12 : insets.top,
      });
    }
  }

  return (
    <ThemedContainer>
      <View className="h-4/5 justify-around">
        <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        <View className="gap-4">
          <Text>Email:</Text>
          <Input
            textContentType="emailAddress"
            placeholder="digite seu email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <Text>Senha:</Text>
          <Input
            textContentType="password"
            placeholder="digite sua senha"
            value={password}
            secureTextEntry
            onChangeText={(e) => setPassword(e)}
          />
          <Button
            size={"full"}
            onPress={() => handleLogin({ email })}
            disabled={email.length < 2 ? true : false}
          >
            <Text>Entrar</Text>
          </Button>
        </View>
      </View>
    </ThemedContainer>
  );
}
