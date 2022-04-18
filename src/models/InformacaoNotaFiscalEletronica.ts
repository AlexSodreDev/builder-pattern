import { Destinatario } from "./Destinatario";
import { Detalhe } from "./Detalhe";
import { Emitente } from "./Emitente";
import { Entrega } from "./Entrega";
import { Ide } from "./Ide";
import { InformacaoAdicional } from "./InformacaoAdicional";
import { Retirada } from "./Retirada";
import { Total } from "./Total";
import { Transporte } from "./Transporte";

export class InformacaoNotaFiscalEletronica {
  id: string;
  versao: string;
  ide: Ide;
  emitente: Emitente;
  destinatario: Destinatario;
  retirada: Retirada;
  entrega: Entrega;
  detalhe: Detalhe[];
  total: Total;
  transporte: Transporte;
  informacaoAdicional: InformacaoAdicional;
}
