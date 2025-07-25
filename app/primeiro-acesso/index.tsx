import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { useUserStore } from "@/store/userStore";
import { AuthContext } from "@/utils/authContext";
import { router } from "expo-router";
import { User } from "lucide-react-native";
import { useContext, useState } from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function PrimeiroAcesso() {
  const { isDarkColorScheme } = useColorScheme();
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const { addUser } = useUserStore();
  const insets = useSafeAreaInsets();

  async function sendEmail({ email }: { email: string }) {
    try {
      // await AsyncStorage.setItem("name", email);
      // addUser(email);
      // Toast.show({
      //   text1: "Login com sucesso!",
      //   topOffset: insets.top === 0 ? 12 : insets.top,
      // });
      // authContext.logIn();
      router.push("/primeiro-acesso/criar-senha");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Email inválido!",
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
        </View>
        <View className="gap-4">
          <Button
            className="mt-5 w-4/5 self-center"
            size={"full"}
            onPress={() => sendEmail({ email })}
            // disabled={email.length < 2 ? true : false}
          >
            <Text>ENTRAR</Text>
          </Button>
          <BackButton />
        </View>
      </View>
    </SafeAreaView>
  );
}
