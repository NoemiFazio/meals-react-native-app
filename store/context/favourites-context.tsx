import { createContext, ReactNode, useState } from "react";

interface FavouritesContextType {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavouritesContextProvider({
  children,
}: FavouritesContextProviderProps) {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  function addFavourite(id: string) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id: string) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
