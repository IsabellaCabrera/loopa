export interface DeleteProps {
  id: string | number;
  onDelete: (id: string | number) => void;
}