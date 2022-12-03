import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { routes } from "components/global/AppWrapper/routes";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo/logo";
import { UserSettings } from "./UserSettings/userSettings";

const NavItem = ({
  icon,
  path,
  content,
}: {
  icon: React.ReactNode;
  path: string;
  content: string;
}) => {
  return (
    <Link to={path}>
      <Flex
        gap="15px"
        padding="15px 20px"
        align="center"
        borderRadius="12px"
        
        _hover={{ bg: "rgba(0,0,0,0.05)" }}
      >
        <Flex align="center" opacity="0.4">
          {icon}
        </Flex>
        <Box
          textTransform="capitalize"
          letterSpacing="0.03em"
          fontSize="14px"
          fontWeight="900"
          fontFamily="Lato"
          opacity="0.9"
        >
          {content}
        </Box>
      </Flex>
    </Link>
  );
};

export const Navigation = () => {
  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_1.dark");

  return (
    <Grid
      bgColor={bg}
      w="250px"
      borderRight="1px solid rgba(0,0,0,0.1)"
      gap="70px"
      padding="35px 20px"
      templateRows="auto 1fr auto"
    >
      <Logo />
      <Flex flexDir="column" gap="10px">
        {routes.map((route: any) => (
          <NavItem path={route.path} content={route.name} icon={route.icon} />
        ))}
      </Flex>
      <UserSettings />
    </Grid>
  );
};
