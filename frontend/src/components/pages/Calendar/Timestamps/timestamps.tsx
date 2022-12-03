import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";

export const Timestamps = () => {
  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_2.DARK");

  return (
    <Grid w="100px" pt="70px" borderRight="1px solid rgba(0,0,0,0.1)">
      {Array.from(Array(24).keys()).map((el, index) => {
        return (
          <Box
            h="79px"
            mt="1px"
            borderBottom="1px solid rgba(0,0,0,0.1)"
            padding="0px"
            bg={bg}
          >
            {index != 0 && (
              <Flex justifyContent="flex-start" bg={bg}>
                <Box
                  transform="translateY(-14px)"
                  padding="0px 10px 0px 15px"
                  color="gray"
                  bg={bg}
                >
                  {el + ":00"}
                </Box>
              </Flex>
            )}
          </Box>
        );
      })}
    </Grid>
  );
};
