import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
  ValueNoneIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const materials = [
  {
    value: "nitrileRubber",
    label: "Nitrile Rubber",
  },
  {
    value: "polyisoprene",
    label: "Polyisoprene",
  },
  {
    value: "polyurethane",
    label: "Polyurethane",
  },
  {
    value: "latex",
    label: "Latex",
  },
  {
    value: "veganLatex",
    label: "Vegan Latex",
  },
  {
    value: "sheerlonLatex",
    label: "Sheerlon Latex",
  },
  {
    value: "unclassified",
    label: "Unclassified",
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

export const types = [
  {
    value: "internal",
    label: "Internal",
  },
  {
    value: "external",
    label: "External",
  },
];

export const hasVLabel = [
  {
    label: "Yes",
    value: "true",
  },
  {
    label: "No",
    value: "false",
  },
];
