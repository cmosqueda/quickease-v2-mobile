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
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// login schema
const schema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Please enter a valid email" }),
  password: z.string(),
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

  // login logic
  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <Box className="flex w-full items-center">
        <VStack className="flex w-4/5 md:w-2/6 items-center gap-y-4">
          {/* email */}
          <FormControl isRequired={true} size="lg" className="w-full">
            <FormControlLabel>
              <FormControlLabelText>E-mail</FormControlLabelText>
            </FormControlLabel>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input className="my-1" size="xl">
                    <InputField type="text" placeholder="eg. johndoe@gmail.com" value={value} onChangeText={onChange} />
                  </Input>
                </>
              )}
            />

            {/* form control error */}
            {errors.email && (
              <>
                <FormControlError>
                  <FormControlErrorText size="sm">Invalid credentials</FormControlErrorText>
                </FormControlError>
              </>
            )}
          </FormControl>

          {/* password */}
          <FormControl isRequired={true} size="lg" className="w-full">
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input className="my-1" size="xl">
                    <InputField
                      type="password"
                      placeholder="Enter your password"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                </>
              )}
            />

            {/* <FormControlError>
              <FormControlErrorText size="sm">Invalid credentials</FormControlErrorText>
            </FormControlError> */}
          </FormControl>
          {/* log in button */}
          <Button className="w-full" size="xl" onPress={handleSubmit(onSubmit)}>
            <ButtonText>Log in</ButtonText>
          </Button>

          <Divider></Divider>

          {/* forgot password */}

          <Button variant="link" size="xl">
            <ButtonText>I forgot my password</ButtonText>
          </Button>
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
        <VStack space="2xl" className="flex gap-y-5 items-center m-5">
          <Box className="gap-y-4 mt-10">
            <Heading size="4xl" className="text-center" bold>
              Welcome back
            </Heading>
            <Text className="text-center" size="lg">
              Continue your learning journey.
            </Text>
          </Box>

          {/* form */}
          <LoginForm></LoginForm>
        </VStack>
      </ScrollView>
    </>
  );
}
