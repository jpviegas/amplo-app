import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import * as Location from "expo-location";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import Toast from "react-native-toast-message";

export default function Registrar() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [currentDate, setCurrentDate] = useState("");

  const getMyLocation = async (): Promise<Region | undefined> => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada para acessar localização");
    }
    const { latitude, longitude } = (await Location.getCurrentPositionAsync({}))
      .coords;
    if (latitude && longitude) {
      setLocation({
        latitude,
        longitude,
      });
    }
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.035,
      longitudeDelta: 0.035,
    };
    return region;
  };

  function handlePoint() {
    try {
      Toast.show({
        text1: "Ponto registrado com sucesso!",
      });
      console.log(location);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível registar o ponto!",
      });
    }
  }

  const mapRef = useRef<MapView>(null);

  const goToMyLocation = async () => {
    const region = await getMyLocation();
    region && mapRef.current?.animateToRegion(region, 1000);
  };

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
    // const interval = setInterval(() => {
    setCurrentDate(getCurrentDateTime());
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <ThemedContainer title={currentDate}>
      <View className="h-2/3 w-5/6 self-center">
        <MapView
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          ref={mapRef}
          onMapReady={() => {
            goToMyLocation();
          }}
          showsUserLocation
          style={StyleSheet.absoluteFill}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Localização atual"
          />
        </MapView>
      </View>
      <View className="gap-4">
        <Link asChild href="/menu/baterponto/confirmar">
          <Button
            size={"lg"}
            variant="outline"
            className="w-3/5 self-center bg-green-500"
          >
            <Text className="font-black">CONFIRMAR</Text>
          </Button>
        </Link>
        <BackButton />
      </View>
    </ThemedContainer>
  );
}
