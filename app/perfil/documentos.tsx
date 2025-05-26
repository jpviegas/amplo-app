import SignaturePad from "@/components/SignaturePad";
import React from "react";
import { SafeAreaView } from "react-native";

export default function Documentos() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignaturePad />
    </SafeAreaView>
  );
}
