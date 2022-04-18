import { DigestMethod } from "./DigestMethod";
import { Transforms } from "./Transforms";

export class Reference {
  URI: string;
  Transforms: Transforms;
  DigestMethod: DigestMethod;
  DigestValue: string;
}
