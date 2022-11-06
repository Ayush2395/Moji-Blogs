import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
