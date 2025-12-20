import React, { createContext, useState, ReactNode } from 'react';

// Context utilisateur
export const UserContext = createContext({
  user: {
    id: 0,
    name: '',
    image: '',
    email: '',
    location: '',
    favorite: [] as number[],
  },
  setUser: (user: any) => {},
  toggleFavorite: (id: number) => {},
});

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({
    id: 5,
    name: 'Emma Brown',
    image: 'https://res.cloudinary.com/demo/image/upload/v1589876543/user5.png',
    email: 'emma.brown@example.com',
    location: 'Miami',
    favorite: [12, 13, 14, 15, 16, 17, 18],
  });

  // Ajouter ou retirer un favori
  const toggleFavorite = (id: number) => {
    setUser((prev) => {
      const isFav = prev.favorite.includes(id);
      const newFavorites = isFav
        ? prev.favorite.filter((favId) => favId !== id)
        : [...prev.favorite, id];
      return { ...prev, favorite: newFavorites };
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, toggleFavorite }}>
      {children}
    </UserContext.Provider>
  );
};
