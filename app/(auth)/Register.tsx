import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Pressable, ScrollView } from "react-native";

import { Button, ButtonText } from "@/components/ui/button";
import { Checkbox, CheckboxIcon, CheckboxIndicator } from "@/components/ui/checkbox";
import { Divider } from "@/components/ui/divider";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { useAppNavigation } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react-native";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// schema
const schema = z
  .object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    email: z.string().min(1, "Required").email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    isTermsAccepted: z.boolean().refine((val) => val === true, { message: "You must accept the terms and conditions" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
    },
  });

  const { goToLogin } = useAppNavigation();

  const handleRegister = (data: FormData) => {
    console.log("Register Form Data:", data);
  };

  return (
    <Box className="flex w-full items-center my-10">
      <VStack className="flex w-4/5 md:w-2/6 items-center gap-y-4">
        {/* First Name */}
        <FormControl size="lg" className="w-full" isInvalid={!!errors.firstName}>
          <FormControlLabel>
            <FormControlLabelText>First Name</FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value } }) => (
              <Input size="xl">
                <InputField type="text" value={value} onChangeText={onChange} />
              </Input>
            )}
          />
          {errors.firstName && (
            <FormControlError>
              <FormControlErrorText size="sm">{errors.firstName.message}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Last Name */}
        <FormControl size="lg" className="w-full" isInvalid={!!errors.lastName}>
          <FormControlLabel>
            <FormControlLabelText>Last Name</FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value } }) => (
              <Input size="xl">
                <InputField type="text" value={value} onChangeText={onChange} />
              </Input>
            )}
          />
          {errors.lastName && (
            <FormControlError>
              <FormControlErrorText size="sm">{errors.lastName.message}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Email */}
        <FormControl size="lg" className="w-full" isInvalid={!!errors.email}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input size="xl">
                <InputField type="text" value={value} onChangeText={onChange} />
              </Input>
            )}
          />
          {errors.email && (
            <FormControlError>
              <FormControlErrorText size="sm">{errors.email.message}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Password */}
        <FormControl size="lg" className="w-full" isInvalid={!!errors.password}>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input size="xl">
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

        {/* Confirm Password */}
        <FormControl size="lg" className="w-full" isInvalid={!!errors.confirmPassword}>
          <FormControlLabel>
            <FormControlLabelText>Confirm Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input size="xl">
                <InputField type="password" value={value} onChangeText={onChange} />
              </Input>
            )}
          />
          {errors.confirmPassword && (
            <FormControlError>
              <FormControlErrorText size="sm">{errors.confirmPassword.message}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Terms Checkbox */}
        <FormControl className="w-full" isInvalid={!!errors.isTermsAccepted}>
          <Controller
            control={control}
            name="isTermsAccepted"
            render={({ field: { value, onChange } }) => (
              <Box className="flex-row items-start">
                <Checkbox value="terms" isChecked={!!value} onChange={onChange} className="mt-1">
                  <CheckboxIndicator>
                    <CheckboxIcon as={Check} />
                  </CheckboxIndicator>
                </Checkbox>

                <Box className="ml-2 flex-1 flex-row flex-wrap items-center">
                  <Text>I agree to the </Text>
                  <Pressable onPress={() => console.log("Terms and privacy pressed")}>
                    <Text underline bold>
                      Terms & Privacy Policy
                    </Text>
                  </Pressable>
                </Box>
              </Box>
            )}
          />
          {errors.isTermsAccepted && (
            <FormControlError>
              <FormControlErrorText size="sm">{errors.isTermsAccepted.message}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Register Button */}
        <Button className="w-full" size="xl" onPress={handleSubmit(handleRegister)}>
          <ButtonText>Create Account</ButtonText>
        </Button>

        <Divider></Divider>

        {/* go to login screen */}
        <Box className="flex flex-row flex-wrap items-center justify-center">
          <Text>Already have an account? </Text>
          <Pressable onPress={goToLogin}>
            <Text underline bold>
              Sign In
            </Text>
          </Pressable>
        </Box>
      </VStack>
    </Box>
  );
};

// Screen
export default function Register() {
  return (
    <ScrollView>
      <VStack space="2xl" className="flex gap-y-5 items-center">
        <Box className="gap-y-4 my-10">
          <Heading size="4xl" className="text-center" bold>
            Hello!
          </Heading>
          <Text className="text-center" size="lg">
            Begin your learning journey.
          </Text>
        </Box>

        <RegisterForm />
      </VStack>
    </ScrollView>
  );
}
