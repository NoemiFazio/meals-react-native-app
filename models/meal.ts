export interface Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

export const createMeal = (
  id: string,
  categoryIds: string[],
  title: string,
  affordability: string,
  complexity: string,
  imageUrl: string,
  duration: number,
  ingredients: string[],
  steps: string[],
  isGlutenFree: boolean,
  isVegan: boolean,
  isVegetarian: boolean,
  isLactoseFree: boolean
): Meal => ({
  id,
  categoryIds,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
});
