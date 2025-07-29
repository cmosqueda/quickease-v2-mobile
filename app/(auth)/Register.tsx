import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native";
// import { Divider } from "@/components/ui/divider";
// import { Button, ButtonText } from "@/components/ui/button";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { Controller, useForm } from "react-hook-form";
// import * as z from "zod";

// import { FormControl, FormControlLabelText, FormControlLabel, FormControlError, FormControlErrorText } from "@/components/ui/form-control";

const RegisterForm = () => {
  return (
    <>
      <Box className="flex w-full items-center">
        <VStack className="flex w-4/5 md:w-2/6 items-center gap-y-4">
          {/* name */}

          {/* email */}

          {/* password */}

          {/* confirm pass */}
        </VStack>
      </Box>
    </>
  );
};

export default function Register() {
  return (
    <>
      <ScrollView>
        <VStack space="2xl" className="flex space-y-5 items-center m-5">
          <Box className="gap-y-4 mt-10">
            <Heading size="4xl" className="text-center" bold>
              Hello!
            </Heading>
            <Text className="text-center" size="lg">
              Begin your learning journey.
            </Text>
          </Box>

          {/* form */}
          <RegisterForm></RegisterForm>
        </VStack>
      </ScrollView>
    </>
  );
}
