import { WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";

export const Urgency = ({ value }: { value: number }) => {
  const typeOptions : any = {
    [1]: () => (
      <>
        {" "}
        <Box bg="#dedede" h="4px" w="10px" borderRadius="2px" />
        <Box bg="#dedede" h="4px" w="15px" borderRadius="2px" />
        <Box bg="#dedede" h="4px" w="20px" borderRadius="2px" />
      </>
    ),
    [2]: () => (
      <>
        {" "}
        <Box bg="#dedede" h="4px" w="10px" borderRadius="2px" />
        <Box bg="#dedede" h="4px" w="15px" borderRadius="2px" />
        <Box bg="#2ecc71" h="4px" w="20px" borderRadius="2px" />
      </>
    ),
    [3]: () => (
      <>
        {" "}
        <Box bg="#dedede" h="4px" w="10px" borderRadius="2px" />
        <Box bg="#f1c40f" h="4px" w="15px" borderRadius="2px" />
        <Box bg="#f1c40f" h="4px" w="20px" borderRadius="2px" />
      </>
    ),
    [4]: () => (
      <>
        {" "}
        <Box bg="#e67e22" h="4px" w="10px" borderRadius="2px" />
        <Box bg="#e67e22" h="4px" w="15px" borderRadius="2px" />
        <Box bg="#e67e22" h="4px" w="20px" borderRadius="2px" />
      </>
    ),
    [5]: () => (
      <Flex align="center" justify="flex-end" boxSize='30px'>
       <WarningIcon boxSize="20px" color="#e74c3c"/>
      </Flex>
    ),
  };

  return (
    <Flex
      boxSize="30px"
      flexDir="column"
      gap="3px"
      align="flex-end"
      justify="center"
    >
		{typeOptions[value]()}
	</Flex>
  );
};
