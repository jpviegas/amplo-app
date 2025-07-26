import ImageViewer from "@/components/ImageViewer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { useUserStore } from "@/store/userStore";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";
import { Eye, EyeOff, LockKeyhole, User } from "lucide-react-native";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function Login() {
  const { isDarkColorScheme } = useColorScheme();
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePass, setSecurePass] = useState(true);
  const { addUser } = useUserStore();
  // const router = useRouter();
  const insets = useSafeAreaInsets();
  const [checked, setChecked] = useState(false);
  // const [isChecked, setChecked] = useState(false);
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

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("name");
        if (value !== null) {
          return router.replace("/menu");
        }
      } catch (e) {}
    };

    getData();
  }, []);

  // const authState = useContext(AuthContext);
  if (authContext.isLoggedIn) {
    return <Redirect href={"/menu"} />;
  }

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
    <SafeAreaView className="flex flex-1 items-center justify-center bg-black/5 dark:bg-black">
      <View className="h-4/5 w-11/12 justify-around gap-4">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View>
          <View className="mb-4">
            <Text>EMAIL</Text>
            <View className="mb-5 w-full flex-row items-center gap-2 border-b-[1px] border-secondary-foreground">
              <User size={24} color={isDarkColorScheme ? "white" : "black"} />
              <Input
                className="flex-1 border-0 bg-inherit"
                textContentType="emailAddress"
                placeholder="digite seu email"
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
            </View>
          </View>
          <View>
            <Text>SENHA</Text>
            <View className="mb-2 w-full flex-row items-center gap-2 border-b-[1px] border-secondary-foreground">
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
          <Text className="text-right italic text-primary">
            Esqueceu sua senha?
          </Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Checkbox checked={checked} onCheckedChange={setChecked} />
          <Label onPress={() => setChecked(!checked)}>
            <Text className="text-lg font-normal">
              Acesso com FaceID ou biometria
            </Text>
          </Label>
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
          {/* <View className="items-center">
            <Text>Ainda não possui conta?</Text>
            <Link asChild href={"/cadastro"}>
              <Text className="text-2xl text-primary">Crie sua conta aqui</Text>
            </Link>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
