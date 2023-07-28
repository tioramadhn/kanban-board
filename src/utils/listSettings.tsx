import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DeleteIcon,
  EditIcon,
} from "../assets/icons";
import { iMenu } from "../components/ListItem";

export const listSettings: iMenu[] = [
  { icon: <ArrowRightIcon />, name: "Move Right", action: "move-right" },
  { icon: <ArrowLeftIcon />, name: "Move Left", action: "move-left" },
  { icon: <EditIcon />, name: "Edit", action: "edit" },
  { icon: <DeleteIcon />, name: "Delete", action: "delete" },
];
