import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import {
  AlertCircle,
  CalendarRange,
  CircleAlert,
  Phone,
  User,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DadosPessoais() {
  const { isDarkColorScheme } = useColorScheme();
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

  // async function handleChangePass() {
  //   try {
  //     // DOTO: await login(values)
  //     Toast.show({
  //       text1: "Senha alterada com sucesso!",
  //       text2: "asas",
  //     });
  //   } catch (error) {
  //     Toast.show({
  //       type: "error",
  //       text1: "Não foi possível alterar sua senha!",
  //     });
  //   }
  // }

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 bg-primary dark:bg-black">
          <View className="mx-4 gap-4">
            <Text className="text-center text-2xl font-semibold">Perfil</Text>
            <View className="border-b-2">
              <Text>NOME</Text>
              <View className="flex-row items-center gap-2">
                <User size={32} color={isDarkColorScheme ? "white" : "black"} />
                <Input className="border-0 border-secondary bg-inherit">
                  {name ? name : "Digite seu nome completo"}
                </Input>
              </View>
            </View>
            <View className="border-b-2">
              <Text>CPF</Text>
              <View className="flex-row items-center gap-2">
                <CircleAlert
                  size={32}
                  color={isDarkColorScheme ? "black" : "white"}
                  fill={isDarkColorScheme ? "white" : "black"}
                />
                <Input className="border-0 border-secondary bg-inherit">
                  000.000.000-00
                </Input>
              </View>
            </View>
            <View className="border-b-2">
              <Text>RG</Text>
              <View className="flex-row items-center gap-2">
                <AlertCircle
                  size={32}
                  color={isDarkColorScheme ? "white" : "black"}
                />
                <Input className="border-0 border-secondary bg-inherit">
                  000.000.000-00
                </Input>
              </View>
            </View>
            <View className="border-b-2">
              <Text>DATA DE NASCIMENTO</Text>
              <View className="flex-row items-center gap-2">
                <CalendarRange
                  size={32}
                  color={isDarkColorScheme ? "white" : "black"}
                />
                <Input className="border-0 border-secondary bg-inherit">
                  data nascimento
                </Input>
              </View>
            </View>
            <View className="border-b-2">
              <Text>CELULAR</Text>
              <View className="flex-row items-center gap-2">
                <Phone
                  size={32}
                  color={isDarkColorScheme ? "white" : "black"}
                />
                <Input className="border-0 border-secondary bg-inherit">
                  (00) 00000-0000
                </Input>
              </View>
            </View>
            <View className="border-b-2">
              <Text>GÊNERO</Text>
              {/* <View className="flex-row items-center gap-2">
            <Input className="border-0 border-secondary bg-inherit">
              <Select>
                <SelectTrigger className="w-[250px]">
                  <SelectValue
                    className=""
                    placeholder="Selecione seu gênero"
                  />
                </SelectTrigger>
                <SelectContent insets={contentInsets} className="w-[250px]">
                  <SelectGroup>
                    <SelectLabel>Gênero</SelectLabel>
                    <SelectItem value="masculino" label="Masculino" />
                    <SelectItem value="feminino" label="Feminino" />
                    <SelectItem value="outro" label="Outro" />
                    <SelectItem value="nao-informar" label="Não informar" />
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Input>
          </View> */}
            </View>
            <View>
              <Text>
                FILHOS OU DEPENDENTES MENORES DE 14 ANOS OU DEPENDENTES
                INVÁLIDOS DE QUEALQUER IDADE
              </Text>
            </View>
          </View>
        </View>
        <Link asChild href={".."}>
          <Button size={"full"} variant="outline" className="w-4/5 self-center">
            <Text>Voltar</Text>
          </Button>
        </Link>
        {/* <Card>
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
        </Card> */}
      </View>
    </ThemedContainer>
  );
}
