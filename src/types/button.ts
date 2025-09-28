import type React from "react";

export type ButtonProps = {
  secondary?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
};

export type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  img?: string;
  onChange: (checked: boolean) => void;
};