import { InformacaoNotaFiscalEletronica } from "./InformacaoNotaFiscalEletronica";
import { Signature } from "./Signature";

export class NotaFiscalEletronica {
  xmlns: string;
  informacaoNotaFiscalEletronica: InformacaoNotaFiscalEletronica;
  signature: Signature;
}
