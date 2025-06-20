import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function DadosPessoais() {
  const insets = useSafeAreaInsets();
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
        text2: "asas",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível alterar sua senha!",
      });
    }
  }

  return (
    <ThemedContainer>
      <View className="h-full w-11/12 justify-around">
        <Text className="text-2xl font-semibold">Dados Pessoais</Text>
        <Card>
          {/* <CardHeader>
            <CardTitle>Nome: {name}</CardTitle>
          </CardHeader> */}
          <CardContent className="my-4 gap-4">
            <Text>Nome: {name}</Text>
            <Text>informações pessoais</Text>
            <Text>mais informações...</Text>
            <Text>etc</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trocar senha</CardTitle>
          </CardHeader>
          <CardContent className="my-4 gap-4">
            <Input placeholder="nova senha" />
            <Button
              size={"full"}
              onPress={() => handleChangePass()}
              className="w-4/5 self-center"
            >
              <Text>Confirmar</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ThemedContainer>
  );
}
