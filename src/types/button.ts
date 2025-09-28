import type React from "react";

export type ButtonProps = {
  secondary?: boolean;
  children: React.ReactNode;
}

export type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  img?: string;
  onChange: (checked: boolean) => void;
};
