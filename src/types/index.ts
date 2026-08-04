export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ContainerProps {
  className?: string;
  size?: "small" | "medium" | "large" | "full";
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  href?: string;
}

export type DivisionId =
  | "all"
  | "executive"
  | "hrd"
  | "pr"
  | "marketing"
  | "sales"
  | "finance"
  | "production";

export interface TeamMember {
  name: string;
  classGrade?: string;
  role: string;
  division: DivisionId;
  divisionName: string;
  isDirector?: boolean;
  desc: string;
  image?: string;
}

export interface DirectionDivision {
  id: DivisionId;
  label: string;
  count: number;
}

