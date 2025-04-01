import logo from "@/assets/images/splash.png";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedContainer>
      <ImageViewer imgSource={logo} />
      <View className="w-4/5 gap-4">
        <Text>Email:</Text>
        <Input textContentType="emailAddress" placeholder="digite seu email" />
        <Text>Senha:</Text>
        <Input
          textContentType="password"
          placeholder="digite sua senha"
          secureTextEntry
        />
        <Link href="/perfil/perfil">
          <Button size={"full"}>
            <Text>Entrar</Text>
          </Button>
        </Link>
      </View>
    </ThemedContainer>
  );
}
