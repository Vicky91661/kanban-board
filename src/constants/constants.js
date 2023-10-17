import {
  CheckCircle2Icon,
  CircleDashed,
  CircleIcon,
  Clock5Icon,
  XCircleIcon,
  MoreHorizontal,
  ShieldAlertIcon,
  SignalHighIcon,
  SignalMediumIcon,
  SignalLowIcon,
} from "lucide-react";

const STATUSMETA = [
  {
    group: "Backlog",
    icon: <CircleDashed color="#8c8c8d" />,
  },
  {
    group: "Todo",
    icon: <CircleIcon color="#8c8c8d" />,
  },
  {
    group: "In progress",
    icon: <Clock5Icon color="orange" />,
  },
  {
    group: "Done",
    icon: <CheckCircle2Icon color="blue" />,
  },
  {
    group: "Canceled",
    icon: <XCircleIcon color="#8c8c8d" />,
  },
];

const PRIORITYMETA = [
  {
    group: "No Priority",
    icon: <MoreHorizontal color="#8c8c8d" />,
    priority: 0,
  },
  {
    group: "Urgent",
    icon: <ShieldAlertIcon color="orange" />,
    priority: 4,
  },
  {
    group: "High",
    icon: <SignalHighIcon color="#8c8c8d" />,
    priority: 3,
  },
  {
    group: "Medium",
    icon: <SignalMediumIcon color="#8c8c8d" />,
    priority: 2,
  },
  {
    group: "Low",
    icon: <SignalLowIcon color="#8c8c8d" />,
    priority: 1,
  },
];

export { STATUSMETA, PRIORITYMETA };
