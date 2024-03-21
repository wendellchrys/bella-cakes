import { Filters } from "@/app/types";

type FilteredSearchParams = {
  brands?: string[];
  categories?: string[];
  text?: string[];
  maxPrice?: number;
  minPrice?: number;
  sort?: string;
  variants?: string[];
}

export function getFiltersValues(params: Filters): FilteredSearchParams {
  const { limit, skip, ...rest } = params; // Ignorando `limit` e `skip` na desestruturação

  const filteredParams = Object.entries(rest).reduce((acc, [key, value]) => {
    // Verificando se o valor não é nulo, indefinido, uma string vazia ou um array vazio
    if (value !== undefined && value !== null && value !== '' && !(Array.isArray(value) && value.length === 0)) {
      // Usando a asserção de tipo para garantir ao TypeScript que a atribuição é segura
      (acc as any)[key] = value;
    }
    return acc;
  }, {} as FilteredSearchParams);

  return filteredParams;
}
