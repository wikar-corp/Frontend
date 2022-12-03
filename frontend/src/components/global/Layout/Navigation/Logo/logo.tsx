import { Box, Flex, Image } from "@chakra-ui/react";

export const Logo = ({ pulse }: { pulse?: boolean }) => {
  return (
    <Flex align="center" fontWeight="bold" gap="8px" marginLeft="20px">
      <Image src="/assets/brand/logo-small.svg" alt="brand logo" w="20px" />
      <Box fontSize="20px" fontWeight="bold">
        Timenage
      </Box>
    </Flex>
  );
};
