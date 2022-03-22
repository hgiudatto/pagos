import { EmpresaCard } from "./EmpresaCard";
import empresas from "./empresas.json";

export function EmpresasGrid() {

  console.log(empresas);

  return (
      <ul>
        {empresas.map((empresa) => (
          <EmpresaCard key={empresa.id} empresa={empresa} />
        ))}
      </ul>
  );
}
