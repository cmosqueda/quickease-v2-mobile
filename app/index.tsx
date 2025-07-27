import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

// lucide react icons
import { BookCheck, NotebookPen, SquareStack, Users } from "lucide-react-native";

// card contents for features section
const cardContents = [
  {
    icon: NotebookPen,
    title: "Summarize with AI",
    description: "Quickly turn long contents into key points.",
  },
  {
    icon: SquareStack,
    title: "Review with AI flashcards",
    description: "Reinforce key concepts for better learning.",
  },
  {
    icon: BookCheck,
    title: "Test with AI quizzes",
    description: "Challenge your knowledge with tailored questions",
  },
  {
    icon: Users,
    title: "Have a question?",
    description: "Ask the community/users!",
  },
];

// hero section
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

// features section
const FeaturesSection = () => {
  return (
    <>
      <Box>
        <Text size="3xl" bold className="text-center">
          Features
        </Text>
        <Box className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {cardContents.map(({ icon: Icon, title, description }) => (
            <>
              <Box key={title}>
                <Box className="flex flex-col">
                  <Icon size={36} className="p-1 rounded-lg"></Icon>
                  <Text>{title}</Text>
                </Box>
                <Text>{description}</Text>
              </Box>
            </>
          ))}
        </Box>
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
