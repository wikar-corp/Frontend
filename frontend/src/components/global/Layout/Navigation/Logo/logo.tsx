import { Box, Flex, Image } from "@chakra-ui/react";

export const Logo = ({ pulse }: { pulse?: boolean }) => {
  return (
    <Flex align="center" fontWeight="bold" gap="8px">
      <Image src="/assets/brand/logo-black.png" alt="brand logo" w="220px"/>
     
    </Flex>
  );
};
