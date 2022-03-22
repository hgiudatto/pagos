import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { EmpresaDetails } from "./components/EmpresaDetails";
import styles from "./App.module.css"

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/"><h1 className={styles.title}>Empresas</h1></Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/empresas/:empresaId" element={<EmpresaDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
