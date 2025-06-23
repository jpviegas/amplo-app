import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";
import { Eye, EyeOff, LockKeyhole, User } from "lucide-react-native";
import { useContext, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { useColorScheme } from "@/lib/useColorScheme";
import { Link } from "expo-router";

export default function Login() {
  const { isDarkColorScheme } = useColorScheme();

  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePass, setSecurePass] = useState(true);
  const { addUser } = useUserStore();
  // const router = useRouter();
  const insets = useSafeAreaInsets();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("name");
  //       if (value !== null) {
  //         return router.replace("/perfil");
  //         // return <Redirect href={'/perfil'}
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
      <View className="h-4/5 w-5/6 justify-around gap-4">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="gap-4">
          <Text>Email:</Text>
          <View className="mb-5 w-full flex-row items-center gap-2 border-b-[1px] border-primary">
            <User size={24} color={isDarkColorScheme ? "white" : "black"} />
            <Input
              className="flex-1 border-0 bg-inherit"
              textContentType="emailAddress"
              placeholder="digite seu email"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <Text>Senha:</Text>
          <View className="mb-5 w-full flex-row items-center gap-2 border-b-[1px] border-primary">
            <LockKeyhole
              size={24}
              color={isDarkColorScheme ? "white" : "black"}
            />
            <Input
              className="w-4/5 border-0 bg-inherit"
              textContentType="password"
              placeholder="digite sua senha"
              value={password}
              secureTextEntry={securePass}
              onChangeText={(e) => setPassword(e)}
            />
            {securePass ? (
              <Eye
                size={24}
                color={isDarkColorScheme ? "white" : "black"}
                onPress={() => setSecurePass(!securePass)}
                className="absolute right-[-10] top-1.5"
              />
            ) : (
              <EyeOff
                size={24}
                color={isDarkColorScheme ? "white" : "black"}
                onPress={() => setSecurePass(!securePass)}
                className="absolute left-10 top-1.5"
              />
            )}
          </View>
        </View>
        <View className="gap-4">
          <Button
            className="mt-5 w-4/5 self-center"
            size={"full"}
            onPress={() => handleLogin({ email })}
            disabled={email.length < 2 ? true : false}
          >
            <Text>Entrar</Text>
          </Button>
          <View className="items-center">
            <Text>Ainda não possui conta?</Text>
            <Link asChild href={"/cadastro"}>
              <Text className="text-2xl text-primary">Crie sua conta aqui</Text>
            </Link>
          </View>
        </View>
      </View>
    </ThemedContainer>
  );
}
