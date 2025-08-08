import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { SolicitarAbonoType } from "@/zodSchemas";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Justificada({
  onSubmit,
}: {
  onSubmit: (values: SolicitarAbonoType) => void;
}) {
  const [fullWorkin, setFullWorking] = useState("yes");
  const [observacao, setObservacao] = useState("");

  useEffect(() => {
    onSubmit({
      motivo: "Justificada",
      dataInicial: "",
      dataFinal: "",
      jornadaCompleta: fullWorkin === "yes",
      anexo: "",
      observacao,
    });
  }, []);

  return (
    <View className="w-5/6 flex-1 gap-4 self-center">
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
      <Card>
        <CardContent className="py-4">
          <Text className="text-center">Todo o Período</Text>
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
      {fullWorkin === "no" && (
        <View className="flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="self-center py-4">
              <Text>Hora Inicial</Text>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="self-center py-4">
              <Text>Hora Final</Text>
            </CardContent>
          </Card>
        </View>
      )}
      <Card>
        <CardContent className="flex-row gap-2 self-center py-4">
          <Text>Anexar Justificativa</Text>
          <Image
            source={require("@/assets/icons/clip.png")}
            style={styles.iconXS}
          />
          <Image
            source={require("@/assets/icons/camera.png")}
            style={styles.iconXS}
          />
          <Image
            source={require("@/assets/icons/image.png")}
            style={styles.iconXS}
          />
        </CardContent>
      </Card>
      <Card className="h-32 flex-1">
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
