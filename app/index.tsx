import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

// lucide react icons
import { BookCheck, NotebookPen, SquareStack, Users } from "lucide-react-native";

import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

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
  const router = useRouter();

  const goToLogin = () => {
    router.push("/(auth)/Login");
  };

  return (
    <>
      <Box className="flex items-center gap-y-10 mt-20">
        {/* text */}
        <Box className="gap-y-5 items-center ">
          <Text className="uppercase text-center">Supercharge your learning.</Text>
          <Heading size="5xl" bold className="text-center">
            Learning has never been easier with{" "}
            <Text size="6xl" bold>
              QuickEase.
            </Text>
          </Heading>
          <Text className="text-center" size="lg">
            QuickEase is a study assistant that helps you generate flashcards and quizzes effortlessly.
          </Text>
        </Box>

        {/* buttons */}
        <HStack space="md">
          <Button size="lg" variant="solid">
            <ButtonText>Join Now</ButtonText>
          </Button>
          <Button size="lg" variant="outline" onPress={goToLogin}>
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
      <Box className="flex gap-y-10">
        <Heading size="3xl" bold className="text-center">
          Features
        </Heading>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* rendering card contents */}
          {cardContents.map(({ icon: Icon, title, description }) => (
            <>
              <Box key={title} className="flex flex-col">
                <Icon size={36} className="p-1 rounded-lg"></Icon>
                {/* texts */}
                <Box className="flex flex-col ">
                  <Text bold size="lg">
                    {title}
                  </Text>
                  <Text size="md" italic>
                    {description}
                  </Text>
                </Box>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

// footer
const Footer = () => {
  return (
    <>
      <Box>
        <Text>QuickEase v2.0</Text>
      </Box>
    </>
  );
};

export default function Landing() {
  return (
    <>
      <ScrollView>
        <VStack space="2xl" className="flex gap-y-20 items-center m-5">
          {/* hero section */}
          <HeroSection></HeroSection>

          {/* features section */}
          <FeaturesSection></FeaturesSection>

          {/* footer */}
          <Footer></Footer>
        </VStack>
      </ScrollView>
    </>
  );
}
