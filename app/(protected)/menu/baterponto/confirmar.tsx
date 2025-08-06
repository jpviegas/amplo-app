import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function ConfirmarPonto() {
  const { user } = useUserStore();
  const [currentDate, setCurrentDate] = useState("");

  const getCurrentDateTime = () => {
    const now = new Date();
    console.log("now", now);

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    const weekDays = [
      "Domingo",
      "Segunda Feira",
      "Terça Feira",
      "Quarta Feira",
      "Quinta Feira",
      "Sexta Feira",
      "Sábado",
    ];
    const weekDay = weekDays[now.getDay()];

    return `    ${hours}:${minutes}:${seconds}
      ${day}/${month}/${year}
      ${weekDay}`;
  };

  useEffect(() => {
    setCurrentDate(getCurrentDateTime());
  }, []);

  return (
    <ThemedContainer title="PONTO REGISTRADO COM SUCESSO">
      <View className="h-5/6 justify-around">
        <View className="items-center">
          <Image
            source={require("@/assets/icons/check.png")}
            className="bg-white"
            style={{ width: 48, height: 48, backgroundColor: "white" }}
          />
        </View>
        <View className="mx-4 h-5/6 items-center justify-around">
          <Text>Autentificação: serial</Text>
          <Text className="mt-4 text-center text-4xl font-bold">
            {currentDate}
          </Text>
          <Text>{user}</Text>
          <Text>Equipamento: serial</Text>
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
