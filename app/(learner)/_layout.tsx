import { appRoutes } from "@/navigation";
import { Stack } from "expo-router";

export default function LearnerLayout() {
  const learnerScreens = appRoutes.learner;

  return (
    <>
      <Stack>
        {learnerScreens.map((screen) => (
          <Stack.Screen key={screen.name} name={screen.name} options={screen.options}></Stack.Screen>
        ))}
      </Stack>
    </>
  );
}
