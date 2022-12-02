import { fonts } from './fonts';
import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { styles } from "./styles";
import { colors } from "./colors";

export const theme = extendTheme({
  components,
  styles,
  colors,
  fonts
});
