import { CanonicalizationMethod } from "./CanonicalizationMethod";
import { Reference } from "./Reference";
import { SignatureMethod } from "./SinatureMethod";

export class SignedInformation {
  canonicalizationMethod: CanonicalizationMethod;
  signatureMethod: SignatureMethod;
  reference: Reference;
}
