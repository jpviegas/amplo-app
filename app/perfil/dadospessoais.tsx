import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";

export default function DadosPessoais() {
  const [name, setName] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("name");
        if (value !== null) {
          setName(value);
        }
      } catch (e) {}
    };

    getData();
  }, []);

  async function handleChangePass() {
    try {
      // DOTO: await login(values)
      Toast.show({
        text1: "Senha alterada com sucesso!",
      });
      console.log(location);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível alterar sua senha!",
      });
    }
  }

  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Nome do funcionario: {name}</CardTitle>
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
          <CardContent className="gap-4">
            <Input placeholder="nova senha" />
            <Button size={"full"} onPress={() => handleChangePass()}>
              <Text>Confirmar</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ThemedContainer>
  );
}
