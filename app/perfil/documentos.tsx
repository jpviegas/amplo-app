import SignatureSkia from "@/components/SignatureSkia";
import React from "react";
import { SafeAreaView } from "react-native";

export default function Documentos() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignatureSkia />
    </SafeAreaView>
  );
}
