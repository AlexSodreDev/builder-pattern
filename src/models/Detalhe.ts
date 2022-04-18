import { Imposto } from "./Imposto";
import { Produto } from "./Produto";

export class Detalhe {
  nItem: string;
  produto: Produto;
  imposto: Imposto;
}
