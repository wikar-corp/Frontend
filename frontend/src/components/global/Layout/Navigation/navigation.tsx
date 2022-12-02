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
      <Flex gap="20px" padding="15px 20px" align="center" borderRadius="12px" bg="red">
        <Box w="20px">{icon}</Box>
        <Box textTransform="capitalize" fontWeight="bold">{content}</Box>
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
      gap="70px"
      padding="20px"
      templateRows="auto 1fr auto"
    >
      <Logo />
      <Flex flexDir="column" gap="10px">
        {routes.map((route) => <NavItem path={route.path} content={route.name} icon={route.icon}/>)}
      </Flex>
      <UserSettings />
    </Grid>
  );
};
