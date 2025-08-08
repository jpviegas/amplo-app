import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Text } from "@/components/ui/text";
import { SolicitarAbonoType } from "@/zodSchemas";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Esqueci({
  onSubmit,
}: {
  onSubmit: (values: SolicitarAbonoType) => void;
}) {
  const [fullWorkin, setFullWorking] = useState("yes");
  const [observacao, setObservacao] = useState("");

  useEffect(() => {
    onSubmit({
      motivo: "Esqueci",
      dataInicial: "",
      dataFinal: "",
      jornadaCompleta: fullWorkin === "yes",
      observacao,
    });
  }, []);

  console.log(observacao);
  return (
    <View className="w-5/6 flex-1 gap-4 self-center">
      {fullWorkin === "no" && (
        <View className="flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="self-center py-4">
              <Text>Data Inicial</Text>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="self-center py-4">
              <Text>Data Final</Text>
            </CardContent>
          </Card>
        </View>
      )}
      <Card>
        <CardContent className="py-4">
          <Text className="text-center">Trabalhou Jornada Completa</Text>
          <RadioGroup
            value={fullWorkin}
            onValueChange={setFullWorking}
            className="flex-row justify-around"
          >
            <View className="flex-row gap-2">
              <RadioGroupItem value="yes" />
              <Label onPress={() => setFullWorking("yes")}>SIM</Label>
            </View>
            <View className="flex-row gap-2">
              <RadioGroupItem value="no" />
              <Label onPress={() => setFullWorking("no")}>NÃO</Label>
            </View>
          </RadioGroup>
        </CardContent>
      </Card>
      <Card className="h-1/2">
        <CardContent className="h-full">
          <Input
            className="flex-1 border-0"
            placeholder="Observação"
            value={observacao}
            onChangeText={setObservacao}
            multiline
          />
        </CardContent>
      </Card>
    </View>
  );
}
