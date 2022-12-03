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
    icon: <CalendarIcon />,
    name: "calendar",
  },
  {
    path: "/tasks",
    element: <Tasks />,
    icon: <CheckCircleIcon />,
    name: "tasks",
  },
  {
    path: "/messages",
    element: <>Messages</>,
    icon: <EmailIcon />,
    name: "messages",
  },
  {
    path: "/settings",
    element: <>Settings</>,
    icon: <SettingsIcon />,
    name: "settings",
  },
];
