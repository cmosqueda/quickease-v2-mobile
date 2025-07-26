// themeprovider uses gluestack
import { Stack } from "expo-router";
import "../global.css";

import { appRoutes } from "@/routes";
import { ThemeProvider } from "@/themes";

export default function RootLayout() {
  const landingScreen = appRoutes.landing;

  return (
    <>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {landingScreen.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} options={screen.options}></Stack.Screen>
          ))}
        </Stack>
      </ThemeProvider>
    </>
  );
}
