export type UserRoleProps = {
  value: string;
  name: string;
  id: string;
  title: string;
  description: string;
  img: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};
