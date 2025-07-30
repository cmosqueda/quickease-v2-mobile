// centralized route config
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

// route item
export interface RouteItem {
  name: string;
  options?: NativeStackNavigationOptions;
  loader?: () => Promise<any>;
  guard?: () => boolean | Promise<boolean>;
}

// app routes types
export interface AppRoutes {
  [group: string]: RouteItem[];
}

// app routes
export const appRoutes: AppRoutes = {
  // index, entrypoint
  landing: [{ name: "index", options: { title: "Landing", headerShown: true } }],
  auth: [
    // /(auth)/
    { name: "Login", options: { title: "Login" } },
    { name: "Register", options: { title: "Register" } },
  ],
  learner: [
    // /(dashboard)/
    { name: "(dashboard)/index", options: { title: "Forums" } },
    { name: "(dashboard)/Timer", options: { title: "Pomodoro" } },
    { name: "(dashboard)/GenerateNote", options: { title: "Generate Note" } },
    { name: "(dashboard)/GenerateFlashcard", options: { title: "Generate Flashcard" } },
    { name: "(dashboard)/GenerateQuiz", options: { title: "Generate Quiz" } },

    // balikan ko ra ni => library index
    { name: "(dashboard)/library/index" },
    // /(flashcard)/

    // /(note)/

    // /(quiz)/

    // /(forums or formerly post)/

    { name: "(dashboard)/forums/index" },

    // /(profile)/

    // /(search)/

    // /(settings)/
  ],
};
