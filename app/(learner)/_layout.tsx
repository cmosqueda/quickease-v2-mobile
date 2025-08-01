import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// drawer layout

export default function LearnerLayout() {
  return (
    <>
      <GestureHandlerRootView>
        <Drawer>
          <Drawer.Screen name="index"></Drawer.Screen>
          <Drawer.Screen name="library"></Drawer.Screen>
          <Drawer.Screen name="forums"></Drawer.Screen>
          <Drawer.Screen name="Timer"></Drawer.Screen>
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
