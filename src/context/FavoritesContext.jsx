import { createContext, useState, useContext } from "react";

// Create a context
const FavoritesContext = createContext();

// Create a provider component
export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteIds((prev) => prev.filter((favId) => favId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the FavoritesContext
export const useFavorites = () => useContext(FavoritesContext);
