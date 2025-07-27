import { appRoutes } from "@/navigation";
import { Stack } from "expo-router";

export default function AuthLayout() {
  const authScreens = appRoutes.auth;

  return (
    <>
      <Stack>
        {authScreens.map((screen) => (
          <Stack.Screen key={screen.name} name={screen.name} options={screen.options}></Stack.Screen>
        ))}
      </Stack>
    </>
  );
}
