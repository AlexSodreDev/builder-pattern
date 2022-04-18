import { KeyInfo } from "./KeyInfo";
import { SignedInformation } from "./SignedInformation";

export class Signature {
  xmlns: string;
  signedInformation: SignedInformation;
  signatureValue: string;
  KeyInfo: KeyInfo;
}
