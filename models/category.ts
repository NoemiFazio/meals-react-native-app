export interface Category {
  id: string;
  title: string;
  color: string;
}

export const createCategory = (
  id: string,
  title: string,
  color: string
): Category => ({ id, title, color });
