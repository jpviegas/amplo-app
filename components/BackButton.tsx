import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";

export default function BackButton() {
  return (
    <Link asChild href={".."}>
      <Button size={"lg"} variant="outline" className="w-4/5 self-center">
        <Text className="font-black">VOLTAR</Text>
      </Button>
    </Link>
  );
}
