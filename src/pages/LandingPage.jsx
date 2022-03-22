import EmpresasCRUD from "../components/EmpresasCRUD";
import { EmpresasGrid } from "../components/EmpresasGrid";
import { SearchEmpresas } from "../components/SearchEmpresas";

export function LandingPage() {
    return (
        <div>
            {/* <h1>Pagos</h1> */}
            {/* <SearchEmpresas /> */}
            <EmpresasCRUD />
            <EmpresasGrid />
        </div>
    )
}
