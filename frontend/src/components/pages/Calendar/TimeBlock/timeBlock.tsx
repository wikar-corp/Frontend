import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Grid,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

export const TimeBlock = ({
  date,
  timeSpan,
  name,
}: {
  date: Date;
  timeSpan: number;
  name: string;
}) => {
  const [row, setRow] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const blockIndex = Math.floor(
      date.getMinutes() + (date.getHours() * 60) / 15
    );
    setRow(blockIndex);
  });

  return (
    <Grid
      bg="BRAND"
      borderRadius="4px"
      color="white"
      padding="10px"
      gridRowStart={row}
      gridRowEnd={row + timeSpan}
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
    >
      {name}
      <Drawer isOpen={isOpen} placement="right" onClose={() => {}}>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Input
              placeholder="Block name"
              defaultValue={name}
              onChange={(e) => {}}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                onClose();
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Grid>
  );
};
