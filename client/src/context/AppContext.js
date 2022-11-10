import { createContext, useReducer } from "react";

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "create-blog":
      return {
        blogs: action.payload,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, { blogs: null });

  return (
    <>
      <AppContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

