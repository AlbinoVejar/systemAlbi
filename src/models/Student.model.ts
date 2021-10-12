class Student {
  constructor(
    aMaterno: string,
    aPaterno: string,
    names: string,
    sex: string,
    bornDate: string,
    ) {
    this.apellidoMaterno = aMaterno;
    this.apellidoPaterno = aPaterno;
    this.nombres = names;
    this.sexo = sex;
    this.fechaNacimiento = bornDate;
  }
  apellidoMaterno: string;
  apellidoPaterno: string;
  nombres: string;
  sexo: string;
  fechaNacimiento: string;
  
  curp: string;
  altura: string;
  peso: string;
  tipoSangre: string;
  usoLentes: boolean;
  alergico: boolean;
}
