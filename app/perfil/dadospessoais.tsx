import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { View } from "react-native";

export default function DadosPessoais() {
  const { user } = useUserStore();

  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Nome do funcionario: {user}</CardTitle>
          </CardHeader>
          <CardContent>
            <Text>informações pessoais</Text>
            <Text>mais informações...</Text>
            <Text>etc</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trocar senha</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="nova senha" />
          </CardContent>
        </Card>
      </View>
    </ThemedContainer>
  );
}
