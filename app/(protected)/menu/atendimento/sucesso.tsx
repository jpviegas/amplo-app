import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { View } from "react-native";

export default function Sucesso() {
  return (
    <ThemedContainer title="">
      <View className="h-4/5 items-center justify-evenly gap-4">
        {/* <View className="items-center"> */}
        <Image
          source={require("@/assets/icons/check.png")}
          // className="bg-white"
          style={{ width: 48, height: 48, backgroundColor: "white" }}
        />
        {/* </View> */}
        <Text className="text-2xlg font-bold">ENVIADO COM SUCESSO!</Text>
        <Text>PROTOCOLO: 1234</Text>
        <Text>Prazo de Resolução de 2 dias</Text>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
