import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  label: string;
  url: string;
  primaryColor: boolean;
};

export default function ThemedLink({ label, url, primaryColor }: Props) {
  return (
    <Link href={url} className="w-4/5">
      <View
        className={`h-20 w-screen items-center justify-center rounded-md ${primaryColor ? "bg-primary" : "bg-secondary"}`}
      >
        <Text
          className={`text-lg ${primaryColor ? "color-slate-100" : "color-slate-900"}`}
        >
          {label}
        </Text>
      </View>
    </Link>
  );
}
