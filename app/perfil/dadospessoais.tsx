import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function DadosPessoais() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Nome do funcionario</CardTitle>
          </CardHeader>
          <CardContent>
            <Text>informações pessoais</Text>
            <Text>mais informações...</Text>
            <Text>etc</Text>
          </CardContent>
        </Card>
      </View>
    </ThemedContainer>
  );
}
