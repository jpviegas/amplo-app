import logo from "@/assets/images/splash.png";
import ImageViewer from "@/components/ImageViewer";
import ThemedLink from "@/components/Link";
import ThemedContainer from "@/components/ThemedContainer";
import { Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedContainer>
      <ImageViewer imgSource={logo} />
      <View className="w-screen items-center">
        <Text>Email:</Text>
        <TextInput placeholder="digite seu e-mail" />
        <Text>Senha:</Text>
        <TextInput placeholder="digite sua senha" />
        <ThemedLink label="Entrar" url="/perfil" primaryColor />
      </View>
    </ThemedContainer>
  );
}
