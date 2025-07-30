import { useRouter } from "expo-router";

export const useAppNavigation = () => {
  const router = useRouter();

  return {
    goToLogin: () => router.push("/(auth)/Login"),
    goToRegister: () => router.push("/(auth)/Register"),
    goBack: () => router.back(),
  };
};
