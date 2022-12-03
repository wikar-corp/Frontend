import {
  AddIcon,
  CalendarIcon,
  CheckCircleIcon,
  EmailIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { Calendar } from "components/pages/Calendar/calendar";
import { Tasks } from "components/pages/Tasks/tasks";

interface RouteItem {
  path: string;
  element: React.ReactNode;
  icon: React.ReactNode;
  name: string;
}

export const routes: RouteItem[] = [
  {
    path: "/calendar",
    element: <Calendar />,
    icon: <CalendarIcon boxSize="40px"/>,
    name: "calendar",
  },
  {
    path: "/tasks",
    element: <Tasks />,
    icon: <CheckCircleIcon boxSize="40px"/>,
    name: "tasks",
  },
];
