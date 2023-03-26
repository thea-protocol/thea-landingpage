import { useState } from "react";
import "./App.css";
import HomeNew from "./pages/HomeNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./utils";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/home-new|/home-new/:sub" element={<HomeNew />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
