import { BellIcon, LockIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "components/global/colorModeSwitcher";
import { useUser } from "providers/User/useUser";

export const UserSettings = () => {
  const { nickname, logout } = useUser();

  return (
    <Grid
      m="0px 20px"
      templateColumns="auto 1fr"
      gap="14px"
      pt="20px"
      borderTop="1px solid rgba(0,0,0,0.1)"
    >
      <Box
        boxSize="44px"
        borderRadius="6px"
        bgColor={"black"}
        bgImage={"/assets/brand/avatar.jpeg"}
        bgSize="cover"
      />
      <Flex justify="center" flexDir="column" gap="6px" lineHeight="100%">
        <Flex fontSize="14px" fontWeight="bold">
          {nickname ? nickname : "Username"}
        </Flex>
        <Flex gap="10px" align="center">
          <ColorModeSwitcher />
          <LockIcon onClick={logout} boxSize="17px" cursor="pointer" _hover={{opacity: 0.6}} w="14px" color={"#bfbfbf"} />
        </Flex>
      </Flex>
    </Grid>
  );
};
