import { useState } from "react";
import "./App.css";
import HomeNew from "./pages/HomeNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./utils";
import CssBaseline from "@mui/material/CssBaseline";
import Background from "./pages/HomeNew/Background";
import Team from "./pages/HomeNew/Background/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeNew />}></Route>
          <Route path="home-new" element={<HomeNew />}></Route>
          <Route path="home-new/:sub" element={<HomeNew />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="background" element={<Background />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
