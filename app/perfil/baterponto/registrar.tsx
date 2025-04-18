import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import * as Location from "expo-location";
import React, { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";

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
    console.log(location);
  }

  const mapRef = useRef<MapView>(null);

  const goToMyLocation = async () => {
    const region = await getMyLocation();
    region && mapRef.current?.animateToRegion(region, 1000);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
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
          >
            <Text>Bater Ponto</Text>
          </Button>
        </CardContent>
      </Card>
    </View>
  );
}
