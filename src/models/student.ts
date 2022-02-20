import { BranchOffice } from './branchOffice';
import { Parent } from './parent';
import { Emergency } from './emergency';
import { Card } from './card';
import { Ailments } from "./ailments";
import { Billing } from "./billing";

export class Student {
  id: number;
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
  yearSchool: string;
  campus: string;
  section: string;
  grade: string;
  ailments: Ailments;
  billing: Billing;
  card: Card;
  father: Parent;
  mother: Parent;
  id_branch: number;
  last_school_name: string;
  brothers_names: string;
  emergency: Array<Emergency>;
}
