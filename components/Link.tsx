import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  url: string;
  primaryColor: boolean;
};

export default function ThemedLink({ label, url, primaryColor }: Props) {
  return (
    <Link href={url} style={styles.link}>
      <View
        style={[
          styles.view,
          { backgroundColor: primaryColor ? "#2e3954" : "#00fefa" },
        ]}
      >
        <Text style={[styles.label, { color: primaryColor ? "#fff" : "#000" }]}>
          {label}
        </Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    width: "80%",
  },
  view: {
    height: 80,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
});
