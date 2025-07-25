import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import {
  AlertCircle,
  CalendarRange,
  CircleAlert,
  Phone,
  User,
} from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";

export default function Perfil() {
  const { isDarkColorScheme } = useColorScheme();
  const [name] = useState("");

  return (
    <ThemedContainer title="Editar Perfil">
      <View className="w-full flex-1 justify-evenly bg-primary">
        <View className="h-4/5">
          <View className="mx-4 gap-4">
            <Text className="text-center text-2xl font-bold">Perfil</Text>
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
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
