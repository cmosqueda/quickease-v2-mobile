// themeprovider uses gluestack
import { Stack } from "expo-router";
import "../global.css";

// import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ThemeProvider } from "@/components/ui/ThemeProvider/ThemeProvider";

export default function RootLayout() {
  return (
    <>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index"></Stack.Screen>
          <Stack.Screen name="(auth)" options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="(learner)" options={{ headerShown: false }}></Stack.Screen>
        </Stack>
      </ThemeProvider>
    </>
  );
}
