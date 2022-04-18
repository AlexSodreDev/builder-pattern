/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/naming-convention */

export interface ResultNfe {
  NFe: Nfe;
}

export interface Nfe {
  xmlns: string;

  infNFe: InfNfe;

  Signature: Signature;
}

export interface InfNfe {
  Id: string;

  versao: string;

  ide: Ide;

  emit: Emit;

  dest: Dest;

  retirada: Retirada;

  entrega: Entrega;

  det: Det[];

  total: Total;

  transp: Transp;

  infAdic: InfAdic;
}

export interface Ide {
  cUF: string;

  cNF: string;

  natOp: string;

  indPag: string;

  mod: string;

  serie: string;

  nNF: string;

  dEmi: string;

  dSaiEnt: string;

  tpNF: string;

  cMunFG: string;

  tpImp: string;

  tpEmis: string;

  cDV: string;

  tpAmb: string;

  finNFe: string;

  procEmi: string;

  verProc: string;
}

export interface Emit {
  CNPJ: string;

  xNome: string;

  xFant: string;

  enderEmit: EnderEmit;

  IE: string;
}

export interface EnderEmit {
  xLgr: string;

  nro: string;

  xCpl: string;

  xBairro: string;

  cMun: string;

  xMun: string;

  UF: string;

  CEP: string;

  cPais: string;

  xPais: string;

  fone: string;
}

export interface Dest {
  CNPJ: string;

  xNome: string;

  enderDest: EnderDest;

  IE: string;
}

export interface EnderDest {
  xLgr: string;

  nro: string;

  xCpl: string;

  xBairro: string;

  cMun: string;

  xMun: string;

  UF: string;

  CEP: string;

  cPais: string;

  xPais: string;

  fone: string;
}

export interface Retirada {
  CNPJ: string;

  xLgr: string;

  nro: string;

  xCpl: string;

  xBairro: string;

  cMun: string;

  xMun: string;

  UF: string;
}

export interface Entrega {
  CNPJ: string;

  xLgr: string;

  nro: string;

  xCpl: string;

  xBairro: string;

  cMun: string;

  xMun: string;

  UF: string;
}

export interface Det {
  nItem: string;

  prod: Prod;

  imposto: Imposto;
}

export interface Prod {
  cProd: string;

  cEAN: CEan;

  xProd: string;

  CFOP: string;

  uCom: string;

  qCom: string;

  vUnCom: string;

  vProd: string;

  cEANTrib: CEantrib;

  uTrib: string;

  qTrib: string;

  vUnTrib: string;
}

export interface CEan {}

export interface CEantrib {}

export interface Imposto {
  ICMS: Icms;

  PIS: Pis;

  COFINS: Cofins;
}

export interface Icms {
  ICMS00: Icms00;
}

export interface Icms00 {
  orig: string;

  CST: string;

  modBC: string;

  vBC: string;

  pICMS: string;

  vICMS: string;
}

export interface Pis {
  PISAliq: Pisaliq;
}

export interface Pisaliq {
  CST: string;

  vBC: string;

  pPIS: string;

  vPIS: string;
}

export interface Cofins {
  COFINSAliq: Cofinsaliq;
}

export interface Cofinsaliq {
  CST: string;

  vBC: string;

  pCOFINS: string;

  vCOFINS: string;
}

export interface Total {
  ICMSTot: Icmstot;
}

export interface Icmstot {
  vBC: string;

  vICMS: string;

  vBCST: string;

  vST: string;

  vProd: string;

  vFrete: string;

  vSeg: string;

  vDesc: string;

  vII: string;

  vIPI: string;

  vPIS: string;

  vCOFINS: string;

  vOutro: string;

  vNF: string;
}

export interface Transp {
  modFrete: string;

  transporta: Transporta;

  veicTransp: VeicTransp;

  reboque: Reboque;

  vol: Vol;
}

export interface Transporta {
  CNPJ: string;

  xNome: string;

  IE: string;

  xEnder: string;

  xMun: string;

  UF: string;
}

export interface VeicTransp {
  placa: string;

  UF: string;

  RNTC: string;
}

export interface Reboque {
  placa: string;

  UF: string;

  RNTC: string;
}

export interface Vol {
  qVol: string;

  esp: string;

  marca: string;

  nVol: string;

  pesoL: string;

  pesoB: string;

  lacres: Lacres;
}

export interface Lacres {
  nLacre: string;
}

export interface InfAdic {
  infAdFisco: string;
}

export interface Signature {
  xmlns: string;

  SignedInfo: SignedInfo;

  SignatureValue: string;

  KeyInfo: KeyInfo;
}

export interface SignedInfo {
  CanonicalizationMethod: CanonicalizationMethod;

  SignatureMethod: SignatureMethod;

  Reference: Reference;
}

export interface CanonicalizationMethod {
  Algorithm: string;
}

export interface SignatureMethod {
  Algorithm: string;
}

export interface Reference {
  URI: string;

  Transforms: Transforms;

  DigestMethod: DigestMethod;

  DigestValue: string;
}

export interface Transforms {
  Transform: Transform[];
}

export interface Transform {
  Algorithm: string;
}

export interface DigestMethod {
  Algorithm: string;
}

export interface KeyInfo {
  X509Data: X509Data;
}

export interface X509Data {
  X509Certificate: string;
}
