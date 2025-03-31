import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  theme?: string;
};

export default function Button({ label, theme }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: `${theme === "primary" ? "#2e3954" : "#00afef"}` },
        ]}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
