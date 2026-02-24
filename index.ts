import type { ReactNode } from 'react';

export type Status = 'not-started' | 'in-progress' | 'shipped';

export interface Step {
  id: number;
  title: string;
  description: string;
  status: Status;
}

export interface ProofItem {
  id: string;
  label: string;
  checked: boolean;
  proofInput?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'textarea';
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export interface StatusBadgeProps {
  status: Status;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface TopBarProps {
  projectName: string;
  currentStep: number;
  totalSteps: number;
  status: Status;
}

export interface ContextHeaderProps {
  title: string;
  subtitle: string;
}

export interface SecondaryPanelProps {
  stepTitle: string;
  stepDescription: string;
  promptText: string;
  onCopy: () => void;
  onBuildInLovable: () => void;
  onItWorked: () => void;
  onError: () => void;
  onAddScreenshot: () => void;
}

export interface ProofFooterProps {
  items: ProofItem[];
  onItemCheck: (id: string, checked: boolean) => void;
  onProofInput: (id: string, value: string) => void;
}
