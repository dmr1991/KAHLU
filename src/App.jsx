import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material"; // 👈 Importamos ThemeProvider y CssBaseline
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import "./App.css";
import theme from "./theme/theme";
import Home from "./pages/Home";
import Contact from "./pages/Contact"; 


function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* 👈 Envolvemos toda la app */}
      <CssBaseline /> {/* 👈 Aplica estilos base y fondo global del tema */}
      <Router>
        <div className="app-container">
          {/* Navbar global */}
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="*" element={<h2>404: Página no encontrada</h2>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
