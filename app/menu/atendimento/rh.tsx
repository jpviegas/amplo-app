import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function RH() {
  return (
    <ThemedContainer title="Recursos Humanos">
      <View className="mx-4 h-3/4 justify-around gap-4">
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
        <Button
          size={"lg"}
          variant="outline"
          className="w-3/5 self-center bg-green-400"
        >
          <Text className="font-black">CONFIRMAR</Text>
        </Button>
        <BackButton />
      </View>
    </ThemedContainer>
  );
}
