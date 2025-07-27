import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

// balik rako diri pokengena

// const for the hero section
const HeroSection = () => {
  return (
    <>
      <Box className="flex items-center space-y-5">
        {/* text */}
        <Box className="space-y-5 items-center ">
          <Text className="uppercase text-center">Supercharge your learning.</Text>
          <Text size="5xl" bold className="text-center">
            Learning has never been easier with QuickEase.
          </Text>
          <Text className="text-center">
            QuickEase is a study assistant that helps you generate flashcards and quizzes effortlessly.
          </Text>
        </Box>

        {/* buttons */}
        <HStack space="md">
          <Button size="md" variant="solid">
            <ButtonText>Join Now</ButtonText>
          </Button>
          <Button size="md" variant="outline">
            <ButtonText>Sign In</ButtonText>
          </Button>
        </HStack>
      </Box>
    </>
  );
};

// const for the features section
const FeaturesSection = () => {
  return (
    <>
      <Box>
        <Text>Hello buang</Text>
      </Box>
    </>
  );
};

export default function Landing() {
  return (
    <>
      <VStack space="2xl" className="flex space-y-5 items-center">
        {/* hero section */}
        <HeroSection></HeroSection>

        {/* features section */}
        <FeaturesSection></FeaturesSection>
      </VStack>
    </>
  );
}
