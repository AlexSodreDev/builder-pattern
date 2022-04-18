import { toJson } from "xml2json";

import { Destinatario } from "./models/Destinatario";
import { InformacaoNotaFiscalEletronica } from "./models/InformacaoNotaFiscalEletronica";
import { NotaFiscal } from "./models/NotaFiscal";
import { NotaFiscalEletronica } from "./models/NotaFiscalEletronica";
import { ResultadoNotaFiscalEletronica } from "./models/ResultadoNotaFiscalEletronica";
import { xml as nota } from "./nota";
import { ResultNfe } from "./notaTypes";

const notaFiscalResponse: ResultNfe = JSON.parse(toJson(nota));

// const notaFiscal = new NotaFiscal();
// const destinatario = new Destinatario();
// destinatario.cnpj = notaFiscalResponse.NFe.infNFe.dest.CNPJ;

const resultadoNotaFiscalEletronica = new ResultadoNotaFiscalEletronica();

const notaFiscalEletronica = new NotaFiscalEletronica();
notaFiscalEletronica.xmlns = notaFiscalResponse.NFe.xmlns;
notaFiscalEletronica.informacaoNotaFiscalEletronica =
  notaFiscalResponse.NFe.infNFe;
notaFiscalEletronica.signature = notaFiscalResponse.NFe.Signature;

const informacaoNotaFiscalEletronica = new InformacaoNotaFiscalEletronica();
informacaoNotaFiscalEletronica.id = notaFiscalResponse.NFe.infNFe.Id;
informacaoNotaFiscalEletronica.versao = notaFiscalResponse.NFe.infNFe.versao;
informacaoNotaFiscalEletronica.ide = notaFiscalResponse.NFe.infNFe.ide;
informacaoNotaFiscalEletronica.emitente = notaFiscalResponse.NFe.infNFe.emit;
informacaoNotaFiscalEletronica.destinatario =
  notaFiscalResponse.NFe.infNFe.dest;
informacaoNotaFiscalEletronica.retirada =
  notaFiscalResponse.NFe.infNFe.retirada;
informacaoNotaFiscalEletronica.entrega = notaFiscalResponse.NFe.infNFe.entrega;
informacaoNotaFiscalEletronica.detalhe = notaFiscalResponse.NFe.infNFe.det[0];
informacaoNotaFiscalEletronica.detalhe.imposto =
  notaFiscalResponse.NFe.infNFe.det[0].imposto;
informacaoNotaFiscalEletronica.total = notaFiscalResponse.NFe.infNFe.total;
informacaoNotaFiscalEletronica.transporte =
  notaFiscalResponse.NFe.infNFe.transp;
informacaoNotaFiscalEletronica.informacaoAdicional =
  notaFiscalResponse.NFe.infNFe.infAdic;

console.log(informacaoNotaFiscalEletronica);
