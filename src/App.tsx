import { GlobalCss, ThemeProvider } from "bold-ui";
import React from "react";
import Home from "./Home";

function App() {
  const globalStyles = {
    h1: {
      fontSize: "2.25rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.2rem"
    }
  };

  return (
    <ThemeProvider>
      <GlobalCss styles={globalStyles} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
