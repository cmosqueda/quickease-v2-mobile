import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { useAppNavigation } from "@/navigation";

// login schema
const schema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormData = z.infer<typeof schema>;

// login form
const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { goToRegister } = useAppNavigation();

  // login logic
  const handleLogin = (data: FormData) => {
    console.log("Login Form Data:", data);
  };

  return (
    <>
      <Box className="flex w-full items-center">
        <VStack className="flex w-4/5 md:w-2/6 items-center gap-y-4">
          {/* email */}
          <FormControl size="lg" className="w-full" isInvalid={!!errors.email}>
            <FormControlLabel>
              <FormControlLabelText>E-mail</FormControlLabelText>
            </FormControlLabel>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input className="my-1" size="xl">
                  <InputField type="text" value={value} onChangeText={onChange} />
                </Input>
              )}
            />

            {/* form control error */}
            {errors.email && (
              <FormControlError>
                <FormControlErrorText size="sm">{errors.email.message}</FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          {/* password */}
          <FormControl size="lg" className="w-full" isInvalid={!!errors.password}>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input className="my-1" size="xl">
                  <InputField type="password" value={value} onChangeText={onChange} />
                </Input>
              )}
            />

            {errors.password && (
              <FormControlError>
                <FormControlErrorText size="sm">{errors.password.message}</FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
          {/* log in button */}
          <Button className="w-full" size="xl" onPress={handleSubmit(handleLogin)}>
            <ButtonText>Log in</ButtonText>
          </Button>

          <Pressable onPress={() => console.log("Forgot password pressed")}>
            <Text>Forgot password</Text>
          </Pressable>

          <Divider></Divider>

          {/* go to register screen */}
          <Box className="flex flex-row flex-wrap items-center justify-center">
            <Text>New to QuickEase? </Text>
            <Pressable onPress={goToRegister}>
              <Text underline bold>
                Register Now
              </Text>
            </Pressable>
          </Box>

          {/* forgot password */}
        </VStack>
      </Box>
    </>
  );
};

// Login screen
export default function Login() {
  return (
    <>
      <ScrollView>
        <VStack space="2xl" className="flex gap-y-10 items-center">
          <Box className="gap-y-4 my-10">
            <Heading size="4xl" className="text-center" bold>
              Welcome back
            </Heading>
            <Text className="text-center" size="lg">
              Continue your learning journey.
            </Text>
          </Box>

          {/* form */}
          <LoginForm></LoginForm>

          {/* terms of use */}
          <Pressable onPress={() => console.log("Terms of use pressed")}>
            <Text>Terms of Use & Policy</Text>
          </Pressable>
        </VStack>
      </ScrollView>
    </>
  );
}
