import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";

export const Timestamps = () => {
  const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");

  return (
    <Grid w="100px" mt="70px" >
      {Array.from(Array(24).keys()).map((el, index) => {
		
        return (
          <Box h="79px" mt="1px" borderBottom="1px solid" padding="0px" bg={bg}>
            {index != 0 && <Flex justifyContent="flex-start" bg={bg}>
              <Box transform="translateY(-14px)" padding="0px 10px" bg={bg}>{el + ":00"}</Box>
            </Flex>}
          </Box>
        );
      })}
    </Grid>
  );
};
