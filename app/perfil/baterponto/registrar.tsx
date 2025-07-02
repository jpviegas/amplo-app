import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import * as Location from "expo-location";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function Registrar() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

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

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
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
        <Card className="absolute bottom-0 w-full">
          <CardHeader>
            <CardTitle>Registro do ponto</CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <Text>
              {location.latitude === 0
                ? "Aguarde..."
                : `${location.latitude}, ${location.longitude}`}
            </Text>
            <Button
              size={"full"}
              disabled={location.latitude === 0 ? true : false}
              onPress={() => handlePoint()}
              className="w-4/5 self-center"
            >
              <Text>Bater Ponto</Text>
            </Button>
            <Link asChild href={".."}>
              <Button
                size={"full"}
                variant="outline"
                className="w-4/5 self-center"
              >
                <Text className="text-primary">Voltar</Text>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
}
