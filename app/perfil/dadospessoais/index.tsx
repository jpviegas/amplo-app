import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function DadosPessoais() {
  return (
    <ThemedContainer>
      <View className="h-4/5 w-11/12 justify-around gap-4">
        <Text className="text-center text-2xl font-bold text-primary">
          Dados Pessoais
        </Text>
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="gap-4">
          <Link href={"/perfil/dadospessoais/perfil"} asChild>
            <Button className="mt-5 w-4/5 self-center" size={"full"}>
              <Text>Perfil</Text>
            </Button>
          </Link>
          <Link href={"/perfil/dadospessoais/alterar-senha"} asChild>
            <Button className="mt-5 w-4/5 self-center" size={"full"}>
              <Text>Alterar Senha</Text>
            </Button>
          </Link>
          <Link href={".."} asChild>
            <Button
              className="mt-5 w-4/5 self-center bg-inherit"
              size={"full"}
              variant={"outline"}
            >
              <Text className="text-primary">Voltar</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedContainer>
  );
}
