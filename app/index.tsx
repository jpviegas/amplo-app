import logo from "@/assets/images/splash.png";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addUser } = useUserStore();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  function handleLogin({ email }: { email: string }) {
    addUser(email);
    Toast.show({
      type: "success",
      text1: "Login com sucesso!",
      topOffset: insets.top === 0 ? 12 : insets.top,
    });
    if (email.length > 1) {
      router.push("/perfil");
    }
  }

  return (
    <ThemedContainer>
      <View className="h-4/5 justify-around">
        <ImageViewer imgSource={logo} />
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
