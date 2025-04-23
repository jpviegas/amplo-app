import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import SignatureCanvas from "react-native-signature-canvas";

export default function SignatureScreen() {
  const [signature, setSignature] = useState(null);
  const ref = useRef();

  const handleSignature = (signature) => {
    console.log(signature);
    setSignature(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("Clear success!");
  };

  const handleUndo = () => {
    ref.current.undo();
    console.log("Undo success!");
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  return (
    <View className="flex h-3/5 flex-initial">
      <SignatureCanvas
        ref={ref}
        onEnd={handleEnd}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
        descriptionText="Assine aqui"
        clearText="Limpar"
        confirmText="Enviar"
      />
      <View className="gap-4">
        <Button onPress={() => handleUndo()}>
          <Text>Desfazer</Text>
        </Button>
      </View>
    </View>
  );
}
