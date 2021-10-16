export class School {
  constructor(
    yearSchool: string,
    campus: string,
    grade: string,
    section: string
  ) {
    this.gradoEscolar = yearSchool;
    this.campus = campus;
    this.seccion = section;
    this.grado = grade;
  }
  gradoEscolar: string;
  campus: string;
  seccion: string;
  grado: string;
}