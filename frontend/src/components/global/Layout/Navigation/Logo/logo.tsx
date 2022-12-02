import { Box, Flex, Image } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Flex align="center" fontWeight="bold" gap="15px" marginLeft="20px">
      <Image src="/assets/brand/logo-small.svg" alt="brand logo" w="20px" />
      <Box>Application</Box>
    </Flex>
  );
};
