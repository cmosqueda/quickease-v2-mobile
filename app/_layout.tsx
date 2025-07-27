// themeprovider uses gluestack
import { Stack } from "expo-router";
import "../global.css";

// import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ThemeProvider } from "@/components/ui/ThemeProvider/ThemeProvider";
import { appRoutes } from "@/navigation";

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
