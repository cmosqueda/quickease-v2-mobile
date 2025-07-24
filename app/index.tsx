import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Landing() {
  return (
    <>
      <View>
        <Text>This is a text component from gluestack ui</Text>
        <Box className="bg-primary-200">
          <Text className="text-typography-0">Hello this is another text component</Text>
        </Box>
      </View>
    </>
  );
}
