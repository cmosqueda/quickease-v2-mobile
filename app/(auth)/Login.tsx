import { Box } from "@/components/ui/box";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useState } from "react";
import { ScrollView } from "react-native";

// login form
const LoginForm = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("12345");

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <>
      <VStack className="flex w-full items-center">
        <FormControl size="md">
          {/* email */}
          <FormControlLabel>
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>

          <Input className="my-1">
            <InputField type="password" placeholder="password"></InputField>
          </Input>
        </FormControl>
      </VStack>
    </>
  );
};

export default function Login() {
  return (
    <>
      <ScrollView>
        <VStack space="2xl" className="flex space-y-5 items-center m-5">
          <Box className="space-y-4">
            <Heading size="4xl" className="text-center" bold>
              Welcome back
            </Heading>
            <Text className="text-center">Continue your learning journey.</Text>
          </Box>

          {/* form */}
          <LoginForm></LoginForm>
        </VStack>
      </ScrollView>
    </>
  );
}
