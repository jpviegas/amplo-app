import logo from "@/assets/images/splash.png";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, addUser } = useUserStore();
  const router = useRouter();

  function handleLogin({ email }: { email: string }) {
    addUser(email);

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
          <Link asChild href="/perfil">
            <Button size={"full"} onPress={() => handleLogin({ email })}>
              <Text>Entrar</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedContainer>
  );
}
