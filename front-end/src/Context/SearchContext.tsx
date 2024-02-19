// SearchContext.tsx
import React, { createContext, useState, useContext } from "react";

interface Category {
  id: string;
  image_url: string;
  alt: string;
  title: string;
  price: number;
  discount: string;
  description: string;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filteredCategories: Category[];
  setFilteredCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider: React.FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredCategories, setFilteredCategories }}>
      {children}
    </SearchContext.Provider>
  );
};
