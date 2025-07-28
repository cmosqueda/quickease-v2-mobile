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
import { useState } from "react";
import { ScrollView } from "react-native";

// adto sa login form

// login form
const LoginForm = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <>
      <Box className="flex w-full items-center">
        <VStack className="flex w-4/5 md:w-2/6 items-center space-y-4">
          {/* email */}
          <FormControl isInvalid={isInvalid} isRequired={true} size="md" className="w-full">
            <FormControlLabel>
              <FormControlLabelText>E-mail</FormControlLabelText>
            </FormControlLabel>

            <Input className="my-1">
              <InputField
                type="text"
                placeholder="eg. johndoe@gmail.com"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
            </Input>

            <FormControlError>
              <FormControlErrorText size="sm">Invalid credentials</FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl isInvalid={isInvalid} isRequired size="md" className="w-full">
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>

            <Input className="my-1">
              <InputField type="password" placeholder="Enter your password" />
            </Input>

            <FormControlError>
              <FormControlErrorText size="sm">Invalid credentials</FormControlErrorText>
            </FormControlError>
          </FormControl>
          {/* log in button */}
          <Button className="w-full" size="md" onPress={handleSubmit}>
            <ButtonText>Log in</ButtonText>
          </Button>

          <Divider></Divider>

          {/* forgot password */}

          <Button variant="link">
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
        <VStack space="2xl" className="flex space-y-5 items-center m-5">
          <Box className="space-y-4 mt-10">
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
