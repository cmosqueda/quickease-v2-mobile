// centralized route config
import type { AppRoutes } from "./routeConfig";

export const appRoutes: AppRoutes = {
  landing: [{ name: "index", options: { title: "Landing", headerShown: true } }],
  auth: [
    { name: "Login", options: { title: "Login" } },
    { name: "Register", options: { title: "Register" } },
  ],
  learner: [
    // dashboard
    { name: "(dashboard)/index", options: { title: "Forums" } },
    { name: "(dashboard)/Library", options: { title: "Library" } },
    { name: "(dashboard)/Timer", options: { title: "Pomodoro" } },
    { name: "(dashboard)/GenerateNote", options: { title: "Generate Note" } },
    { name: "(dashboard)/GenerateFlashcard", options: { title: "Generate Flashcard" } },
    { name: "(dashboard)/GenerateQuiz", options: { title: "Generate Quiz" } },

    // flashcard

    // note

    // quiz

    // post

    // profile

    // search

    // settings
  ],
};
