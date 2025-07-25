import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import {
  AlertCircle,
  Calendar,
  CalendarRange,
  CircleAlert,
  Phone,
  User,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Perfil() {
  const { isDarkColorScheme } = useColorScheme();
  const [name] = useState("");
  const [gender, setGender] = useState("");
  const [dependents, setDependents] = useState("no");

  return (
    <ThemedContainer title="Perfil">
      <View className="h-5/6 justify-around">
        <ScrollView className="mx-4 flex-1 rounded-xl">
          <Card>
            <CardContent className="mx-4 h-full flex-col gap-8">
              <View className="border-b-2">
                <Text>NOME</Text>
                <View className="flex-row items-center gap-2">
                  <User
                    size={32}
                    color={isDarkColorScheme ? "white" : "black"}
                  />
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
                  <Input
                    className="border-0 border-secondary bg-inherit"
                    placeholder="(00) 00000-0000"
                  ></Input>
                </View>
              </View>
              <View className="border-b-2">
                <View className="gap-2">
                  <Text>GÊNERO</Text>
                  <View className="flex-row items-center gap-2">
                    <User size={32} color={"black"} />
                    <Select
                      onValueChange={(target) => setGender(target?.value)}
                      className="flex-1"
                    >
                      <SelectTrigger className="w-full border-0 bg-inherit">
                        <SelectValue placeholder="Selecione seu gênero" />
                      </SelectTrigger>
                      <SelectContent className="w-2/3">
                        <SelectGroup>
                          <SelectLabel>Gênero</SelectLabel>
                          <SelectItem value="masculino" label="Masculino" />
                          <SelectItem value="feminino" label="Feminino" />
                          <SelectItem value="outro" label="Outro" />
                          <SelectItem
                            value="nao-informar"
                            label="Não informar"
                          />
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </View>
                </View>
              </View>
              <View className="gap-2">
                <Text>
                  FILHOS OU DEPENDENTES MENORES DE 14 ANOS OU DEPENDENTES
                  INVÁLIDOS DE QUEALQUER IDADE
                </Text>
                <RadioGroup
                  value={dependents}
                  onValueChange={setDependents}
                  className="flex-row justify-around"
                >
                  <View className="flex-row gap-2">
                    <RadioGroupItem value="yes" />
                    <Label onPress={() => setDependents("yes")}>SIM</Label>
                  </View>
                  <View className="flex-row gap-2">
                    <RadioGroupItem value="no" />
                    <Label onPress={() => setDependents("no")}>NÃO</Label>
                  </View>
                </RadioGroup>
                <Collapsible open={dependents === "yes" ? true : false}>
                  <CollapsibleContent className="gap-4">
                    <View className="border-b-2">
                      <Text>QUANTIDADE DE FILHOS</Text>
                      <View className="flex-row items-center gap-2">
                        <User
                          size={32}
                          color={isDarkColorScheme ? "white" : "black"}
                        />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                    <View className="border-b-2">
                      <Text>1 - NOME COMPLETO DO FILHO</Text>
                      <View className="flex-row items-center gap-2">
                        <User size={32} color={"black"} />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                    <View className="border-b-2">
                      <Text>1 - CPF DO FILHO</Text>
                      <View className="flex-row items-center gap-2">
                        <User size={32} color={"black"} />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                    <View className="border-b-2">
                      <Text>1 - DATA DE NASCIMENTO DO FILHO</Text>
                      <View className="flex-row items-center gap-2">
                        <Calendar size={32} color={"black"} />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                    <View className="border-b-2">
                      <Text>2 - NOME COMPLETO DO FILHO</Text>
                      <View className="flex-row items-center gap-2">
                        <User size={32} color={"black"} />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                    <View className="border-b-2">
                      <Text>2 - CPF DO FILHO</Text>
                      <View className="flex-row items-center gap-2">
                        <User size={32} color={"black"} />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                    <View className="border-b-2">
                      <Text>2 - DATA DE NASCIMENTO DO FILHO</Text>
                      <View className="flex-row items-center gap-2">
                        <Calendar size={32} color={"black"} />
                        <Input
                          className="border-0 border-secondary bg-inherit"
                          placeholder="Digite a quantidade de filhos"
                        />
                      </View>
                    </View>
                  </CollapsibleContent>
                </Collapsible>
              </View>
            </CardContent>
          </Card>
        </ScrollView>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
