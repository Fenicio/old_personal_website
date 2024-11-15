import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoLogoBitbucket, IoGameController, IoSparkles } from 'react-icons/io5';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Container maxW={'5xl'} py={12} id="about">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'brand.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('brand.50', 'brand.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            About Me
          </Text>
          <Heading>A passionate fullstack developer</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            I specialize in building modern web applications using React and creating
            engaging game experiences with Godot. My passion for technology extends to
            exploring the potential of Large Language Models and developing productivity tools.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }
          >
            <Feature
              icon={<Icon as={IoLogoBitbucket} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Fullstack Development with React'}
            />
            <Feature
              icon={<Icon as={IoGameController} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Game Development with Godot'}
            />
            <Feature
              icon={<Icon as={IoSparkles} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'LLMs and Productivity Tools'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
