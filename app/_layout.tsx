import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import "../global.css";

import { appRoutes } from "@/routes";

export default function RootLayout() {
  const landingScreen = appRoutes.landing;

  return (
    <>
      <GluestackUIProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {landingScreen.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} options={screen.options}></Stack.Screen>
          ))}
        </Stack>
      </GluestackUIProvider>
    </>
  );
}
