import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { CircleX } from "lucide-react-native";

export default function NotFound() {
  return (
    <>
      <Box className="flex items-center justify-center w-full h-full space-y-5">
        {/* icon */}
        <CircleX size={100} className="text-error-500" />
        {/* text */}
        <Box className="space-y-4">
          <Text size="4xl" className="text-center" bold>
            404 Page Not Found
          </Text>
          <Text size="lg" className="text-center" italic>
            Oops! The requested page does not exist.
          </Text>
        </Box>
      </Box>
    </>
  );
}
