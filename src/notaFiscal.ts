import { toJson } from "xml2json";

import { CEan } from "./models/CEan";
import { CEantrib } from "./models/CEantrib";
import { Cofins } from "./models/Cofins";
import { Destinatario } from "./models/Destinatario";
import { Detalhe } from "./models/Detalhe";
import { Emitente } from "./models/Emitente";
import { EnderecoDestinatario } from "./models/EnderecoDestinatario";
import { EnderecoEmitente } from "./models/EnderecoEmitente";
import { Entrega } from "./models/Entrega";
import { Icms } from "./models/Icms";
import { Icms00 } from "./models/Icms00";
import { Ide } from "./models/Ide";
import { Imposto } from "./models/Imposto";
import { InformacaoNotaFiscalEletronica } from "./models/InformacaoNotaFiscalEletronica";
import { NotaFiscal } from "./models/NotaFiscal";
import { NotaFiscalEletronica } from "./models/NotaFiscalEletronica";
import { Pis } from "./models/Pis";
import { PisAliquota } from "./models/PisAliquota";
import { Produto } from "./models/Produto";
import { ResultadoNotaFiscalEletronica } from "./models/ResultadoNotaFiscalEletronica";
import { Retirada } from "./models/Retirada";
import { Total } from "./models/Total";
import { xml as nota } from "./nota";
import { ResultNfe } from "./notaTypes";

const notaFiscalResponse: ResultNfe = JSON.parse(toJson(nota));

// const notaFiscal = new NotaFiscal();
// const destinatario = new Destinatario();
// destinatario.cnpj = notaFiscalResponse.NFe.infNFe.dest.CNPJ;

const resultadoNotaFiscalEletronica = new ResultadoNotaFiscalEletronica();
resultadoNotaFiscalEletronica.notaFiscalEletronica = notaFiscalResponse.NFe;

const notaFiscalEletronica = new NotaFiscalEletronica();
notaFiscalEletronica.xmlns = notaFiscalResponse.NFe.xmlns;
notaFiscalEletronica.informacaoNotaFiscalEletronica =
  notaFiscalResponse.NFe.infNFe;
// notaFiscalEletronica.informacaoNotaFiscalEletronica.destinatario.cnpj =
//   notaFiscalResponse.NFe.infNFe.dest.CNPJ;
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

const ide = new Ide();
ide.cUF = notaFiscalResponse.NFe.infNFe.ide.cUF;
ide.cNF = notaFiscalResponse.NFe.infNFe.ide.cNF;
ide.natOp = notaFiscalResponse.NFe.infNFe.ide.natOp;
ide.indPag = notaFiscalResponse.NFe.infNFe.ide.indPag;
ide.mod = notaFiscalResponse.NFe.infNFe.ide.mod;
ide.serie = notaFiscalResponse.NFe.infNFe.ide.serie;
ide.nNF = notaFiscalResponse.NFe.infNFe.ide.nNF;
ide.dEmi = notaFiscalResponse.NFe.infNFe.ide.dEmi;
ide.dSaiEnt = notaFiscalResponse.NFe.infNFe.ide.dSaiEnt;
ide.tpNF = notaFiscalResponse.NFe.infNFe.ide.tpNF;
ide.cMunFG = notaFiscalResponse.NFe.infNFe.ide.cMunFG;
ide.tpImp = notaFiscalResponse.NFe.infNFe.ide.tpImp;
ide.tpEmis = notaFiscalResponse.NFe.infNFe.ide.tpEmis;
ide.cDV = notaFiscalResponse.NFe.infNFe.ide.cDV;
ide.tpAmb = notaFiscalResponse.NFe.infNFe.ide.tpAmb;
ide.finNFe = notaFiscalResponse.NFe.infNFe.ide.finNFe;
ide.procEmi = notaFiscalResponse.NFe.infNFe.ide.procEmi;
ide.verProc = notaFiscalResponse.NFe.infNFe.ide.verProc;

const emitente = new Emitente();
emitente.cnpj = notaFiscalResponse.NFe.infNFe.emit.CNPJ;
emitente.nome = notaFiscalResponse.NFe.infNFe.emit.xNome;
emitente.fantasia = notaFiscalResponse.NFe.infNFe.emit.xFant;
emitente.enderecoEmitente = notaFiscalResponse.NFe.infNFe.emit.enderEmit;
emitente.ie = notaFiscalResponse.NFe.infNFe.emit.IE;

const enderecoEmitente = new EnderecoEmitente();
enderecoEmitente.xLgr = notaFiscalResponse.NFe.infNFe.emit.enderEmit.xLgr;
enderecoEmitente.nro = notaFiscalResponse.NFe.infNFe.emit.enderEmit.nro;
enderecoEmitente.xCpl = notaFiscalResponse.NFe.infNFe.emit.enderEmit.xCpl;
enderecoEmitente.xBairro = notaFiscalResponse.NFe.infNFe.emit.enderEmit.xBairro;
enderecoEmitente.cMun = notaFiscalResponse.NFe.infNFe.emit.enderEmit.cMun;
enderecoEmitente.xMun = notaFiscalResponse.NFe.infNFe.emit.enderEmit.xMun;
enderecoEmitente.uf = notaFiscalResponse.NFe.infNFe.emit.enderEmit.UF;
enderecoEmitente.cep = notaFiscalResponse.NFe.infNFe.emit.enderEmit.CEP;
enderecoEmitente.cPais = notaFiscalResponse.NFe.infNFe.emit.enderEmit.cPais;
enderecoEmitente.xPais = notaFiscalResponse.NFe.infNFe.emit.enderEmit.xPais;
enderecoEmitente.fone = notaFiscalResponse.NFe.infNFe.emit.enderEmit.fone;

const destinatario = new Destinatario();
destinatario.cnpj = notaFiscalResponse.NFe.infNFe.dest.CNPJ;
destinatario.nome = notaFiscalResponse.NFe.infNFe.dest.xNome;
destinatario.enderecoDestinatario =
  notaFiscalResponse.NFe.infNFe.dest.enderDest;
destinatario.ie = notaFiscalResponse.NFe.infNFe.dest.IE;

const enderecoDestinatario = new EnderecoDestinatario();
enderecoDestinatario.xLgr = notaFiscalResponse.NFe.infNFe.dest.enderDest.xLgr;
enderecoDestinatario.nro = notaFiscalResponse.NFe.infNFe.dest.enderDest.nro;
enderecoDestinatario.xCpl = notaFiscalResponse.NFe.infNFe.dest.enderDest.xCpl;
enderecoDestinatario.xBairro =
  notaFiscalResponse.NFe.infNFe.dest.enderDest.xBairro;
enderecoDestinatario.cMun = notaFiscalResponse.NFe.infNFe.dest.enderDest.cMun;
enderecoDestinatario.xMun = notaFiscalResponse.NFe.infNFe.dest.enderDest.xMun;
enderecoDestinatario.uf = notaFiscalResponse.NFe.infNFe.dest.enderDest.UF;
enderecoDestinatario.cep = notaFiscalResponse.NFe.infNFe.dest.enderDest.CEP;
enderecoDestinatario.cPais = notaFiscalResponse.NFe.infNFe.dest.enderDest.cPais;
enderecoDestinatario.xPais = notaFiscalResponse.NFe.infNFe.dest.enderDest.xPais;
enderecoDestinatario.fone = notaFiscalResponse.NFe.infNFe.dest.enderDest.fone;

const retirada = new Retirada();
retirada.cnpj = notaFiscalResponse.NFe.infNFe.retirada.CNPJ;
retirada.xLgr = notaFiscalResponse.NFe.infNFe.retirada.xLgr;
retirada.nro = notaFiscalResponse.NFe.infNFe.retirada.nro;
retirada.xCpl = notaFiscalResponse.NFe.infNFe.retirada.xCpl;
retirada.xBairro = notaFiscalResponse.NFe.infNFe.retirada.xBairro;
retirada.cMun = notaFiscalResponse.NFe.infNFe.retirada.cMun;
retirada.xMun = notaFiscalResponse.NFe.infNFe.retirada.xMun;
retirada.uf = notaFiscalResponse.NFe.infNFe.retirada.UF;

const entrega = new Entrega();
entrega.cnpj = notaFiscalResponse.NFe.infNFe.entrega.CNPJ;
entrega.xLgr = notaFiscalResponse.NFe.infNFe.entrega.xLgr;
entrega.nro = notaFiscalResponse.NFe.infNFe.entrega.nro;
entrega.xCpl = notaFiscalResponse.NFe.infNFe.entrega.xCpl;
entrega.xBairro = notaFiscalResponse.NFe.infNFe.entrega.xBairro;
entrega.cMun = notaFiscalResponse.NFe.infNFe.entrega.cMun;
entrega.xMun = notaFiscalResponse.NFe.infNFe.entrega.xMun;
entrega.uf = notaFiscalResponse.NFe.infNFe.entrega.UF;

const detalhe = new Detalhe();
detalhe.nItem = notaFiscalResponse.NFe.infNFe.det[0].nItem;
detalhe.produto = notaFiscalResponse.NFe.infNFe.det[0].prod;
detalhe.produto.cProd = notaFiscalResponse.NFe.infNFe.det[0].prod.cProd;
detalhe.produto.cEAN = notaFiscalResponse.NFe.infNFe.det[0].prod.cEAN;
detalhe.produto.xProd = notaFiscalResponse.NFe.infNFe.det[0].prod.xProd;
detalhe.produto.CFOP = notaFiscalResponse.NFe.infNFe.det[0].prod.CFOP;
detalhe.produto.uCom = notaFiscalResponse.NFe.infNFe.det[0].prod.uCom;
detalhe.produto.qCom = notaFiscalResponse.NFe.infNFe.det[0].prod.qCom;
detalhe.produto.vUnCom = notaFiscalResponse.NFe.infNFe.det[0].prod.vUnCom;
detalhe.produto.vProd = notaFiscalResponse.NFe.infNFe.det[0].prod.vProd;
detalhe.produto.cEANTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.cEANTrib;
detalhe.produto.uTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.uTrib;
detalhe.produto.qTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.qTrib;
detalhe.produto.vUnTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.vUnTrib;
detalhe.imposto = notaFiscalResponse.NFe.infNFe.det[0].imposto;
detalhe.imposto.icms = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS;
detalhe.imposto.icms.icms00 =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00;
detalhe.imposto.icms.icms00.orig =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.orig;
detalhe.imposto.icms.icms00.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.CST;
detalhe.imposto.icms.icms00.modBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.modBC;
detalhe.imposto.icms.icms00.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vBC;
detalhe.imposto.icms.icms00.pICMS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.pICMS;
detalhe.imposto.icms.icms00.vICMS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vICMS;
detalhe.imposto.pis = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq;
detalhe.imposto.pis.pisAliquota =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq;
detalhe.imposto.pis.pisAliquota.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.CST;
detalhe.imposto.pis.pisAliquota.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vBC;
detalhe.imposto.pis.pisAliquota.pPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.pPIS;
detalhe.imposto.pis.pisAliquota.vPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vPIS;
detalhe.imposto.cofins =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq;
detalhe.imposto.cofins.cofinsAliquota =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq;
detalhe.imposto.cofins.cofinsAliquota.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.CST;
detalhe.imposto.cofins.cofinsAliquota.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.vBC;
detalhe.imposto.cofins.cofinsAliquota.pCOFINS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.pCOFINS;
detalhe.imposto.cofins.cofinsAliquota.vCOFINS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.vCOFINS;

const produto = new Produto();
produto.cProd = notaFiscalResponse.NFe.infNFe.det[0].prod.cProd;
produto.cEAN = notaFiscalResponse.NFe.infNFe.det[0].prod.cEAN;
produto.xProd = notaFiscalResponse.NFe.infNFe.det[0].prod.xProd;
produto.CFOP = notaFiscalResponse.NFe.infNFe.det[0].prod.CFOP;
produto.uCom = notaFiscalResponse.NFe.infNFe.det[0].prod.uCom;
produto.qCom = notaFiscalResponse.NFe.infNFe.det[0].prod.qCom;
produto.vUnCom = notaFiscalResponse.NFe.infNFe.det[0].prod.vUnCom;
produto.vProd = notaFiscalResponse.NFe.infNFe.det[0].prod.vProd;
produto.cEANTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.cEANTrib;
produto.uTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.uTrib;
produto.qTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.qTrib;
produto.vUnTrib = notaFiscalResponse.NFe.infNFe.det[0].prod.vUnTrib;

const cean = new CEan();

const ceanTrib = new CEantrib();

const imposto = new Imposto();
imposto.icms = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS;
imposto.icms.icms00 = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00;
imposto.icms.icms00.orig =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.orig;
imposto.icms.icms00.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.CST;
imposto.icms.icms00.modBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.modBC;
imposto.icms.icms00.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vBC;
imposto.icms.icms00.pICMS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.pICMS;
imposto.icms.icms00.vICMS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vICMS;
imposto.pis = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS;
imposto.pis.pisAliquota =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq;
imposto.pis.pisAliquota.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.CST;
imposto.pis.pisAliquota.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vBC;
imposto.pis.pisAliquota.pPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.pPIS;
imposto.pis.pisAliquota.vPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vPIS;
imposto.cofins = notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS;
imposto.cofins.cofinsAliquota =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq;
imposto.cofins.cofinsAliquota.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.CST;
imposto.cofins.cofinsAliquota.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.vBC;
imposto.cofins.cofinsAliquota.pCOFINS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.pCOFINS;
imposto.cofins.cofinsAliquota.vCOFINS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.vCOFINS;

// seria somente o icms??
const icms = new Icms();
icms.icms00 = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00;
icms.icms00.orig =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.orig;
icms.icms00.CST = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.CST;
icms.icms00.modBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.modBC;
icms.icms00.vBC = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vBC;
icms.icms00.pICMS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.pICMS;
icms.icms00.vICMS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vICMS;

const icms00 = new Icms00();
icms00.orig = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.orig;
icms00.CST = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.CST;
icms00.modBC = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.modBC;
icms00.vBC = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vBC;
icms00.pICMS = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.pICMS;
icms00.vICMS = notaFiscalResponse.NFe.infNFe.det[0].imposto.ICMS.ICMS00.vICMS;

// seria somente o pis??
const pis = new Pis();
// pis = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS;
pis.pisAliquota = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq;
pis.pisAliquota.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.CST;
pis.pisAliquota.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vBC;
pis.pisAliquota.pPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.pPIS;
pis.pisAliquota.vPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vPIS;

const pisAliquota = new PisAliquota();
// pisAliquota = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq;
pisAliquota.CST = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.CST;
pisAliquota.vBC = notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vBC;
pisAliquota.pPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.pPIS;
pisAliquota.vPIS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.PIS.PISAliq.vPIS;

const cofins = new Cofins();
cofins.cofinsAliquota =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq;
cofins.cofinsAliquota.CST =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.CST;
cofins.cofinsAliquota.vBC =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.vBC;
cofins.cofinsAliquota.pCOFINS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.pCOFINS;
cofins.cofinsAliquota.vCOFINS =
  notaFiscalResponse.NFe.infNFe.det[0].imposto.COFINS.COFINSAliq.vCOFINS;

// terminar =)
// const total = new Total();
// total.iCMSTot = notaFiscalResponse.NFe.infNFe.total.ICMSTot;
// total.iCMSTot.

console.log(total);
