import { Button } from "@chakra-ui/react";
import React from "react";
import { DisplayedElement } from "./signInForm";

export const ActionButton = ({
  onClick,
  children,
}: {
  onClick: any;
  children: JSX.Element | string;
}) => {
  return (
    <Button
      w="85%"
      p="15px"
      alignItems="center"
      justifyContent="center"
      bg="#dadada"
      borderRadius="8px"
      color="black"
      cursor="pointer"
      _hover={{ opacity: "0.6" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
