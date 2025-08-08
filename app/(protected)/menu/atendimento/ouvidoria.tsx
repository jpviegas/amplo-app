import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Ouvidoria() {
  return (
    <ThemedContainer title="Ouvidoria/Reclamação">
      <View className="mx-4 h-2/3 justify-around gap-4">
        <Card className="mt-6">
          <CardContent className="items-center justify-center">
            <Input placeholder="ASSUNTO" className="border-0" />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent>
            <Input placeholder="TEXTO" className="border-0" />
          </CardContent>
        </Card>
      </View>
      <View>
        <Link asChild href={"/menu/atendimento/sucesso"}>
          <Button
            size={"lg"}
            variant="outline"
            className="w-3/5 self-center bg-green-400"
          >
            <Text className="font-black">CONFIRMAR</Text>
          </Button>
        </Link>
        <BackButton />
      </View>
    </ThemedContainer>
  );
}
