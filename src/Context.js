import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppContext.Provider value={{ isMatch }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
