import { toJson } from "xml2json";

import { Destinatario } from "./models/Destinatario";
import { NotaFiscal } from "./models/NotaFiscal";
import { ResultadoNotaFiscalEletronica } from "./models/ResultadoNotaFiscalEletronica";
import { xml as nota } from "./nota";
import { ResultNfe } from "./notaTypes";

const notaFiscalResponse: ResultNfe = JSON.parse(toJson(nota));

// const notaFiscal = new NotaFiscal();
// const destinatario = new Destinatario();
// destinatario.cnpj = notaFiscalResponse.NFe.infNFe.dest.CNPJ;


const resultadoNotaFiscalEletronica = new ResultadoNotaFiscalEletronica();
resultadoNotaFiscalEletronica.notaFiscalEletronica.xmlns
resultadoNotaFiscalEletronica.notaFiscalEletronica.informacaoNotaFiscalEletronica.id
resultadoNotaFiscalEletronica.notaFiscalEletronica.informacaoNotaFiscalEletronica.versao
resultadoNotaFiscalEletronica.notaFiscalEletronica.informacaoNotaFiscalEletronica.ide.

