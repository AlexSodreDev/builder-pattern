import { Carga } from "./Carga";
import { Reboque } from "./Reboque";
import { Transportadora } from "./Transportadora";
import { VeiculoTransportadora } from "./VeiculoTransportadora";

export class Transporte {
  modeloFrete: string;
  transportadora: Transportadora;
  veiculoTransportadora: VeiculoTransportadora;
  reboque: Reboque;
  carga: Carga;
}
