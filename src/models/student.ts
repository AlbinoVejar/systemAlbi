import { BranchOffice } from './branchOffice';
import { Parent } from './parent';
import { Emergency } from './emergency';
import { Card } from './card';
import { Ailments } from "./ailments";
import { Billing } from "./billing";

export class Student {
  names: string;
  last_name_first: string;
  last_name_second: string;
  born_date: string;
  born_place: string;
  sex: string;
  address: string;
  colony: string;
  phone: string;
  postal_code: string;
  curp: string;
  height: string;
  weight: string;
  blood_type: string;
  alergic: string;
  glasses: string;
  ailments: Ailments;
  billing: Billing;
  card: Card;
  emergency: Emergency;
  father: Parent;
  mother: Parent;
  branch: BranchOffice;
}
