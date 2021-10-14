import { Ubication } from './Ubication.model';
import * as moment from 'moment';

export class Student {
  constructor(
    lastFirstName: string,
    lastSecondName: string,
    names: string,
    sex: string,
    bornDate: string,
    ubication: Ubication,
    curp: string,
    height: string,
    weight: string,
    bloodType: string,
    glasses: boolean,
    alergic: boolean
  ) {
    this.apellidoMaterno = lastFirstName;
    this.apellidoPaterno = lastSecondName;
    this.nombres = names;
    this.sexo = sex;
    this.fechaNacimiento = moment(bornDate).format('MM-DD-YYYY').toString();
    this.ubicacion = ubication;
    this.curp = curp;
    this.altura = height;
    this.peso = weight;
    this.tipoSangre = bloodType;
    this.usoLentes = glasses;
    this.alergico = alergic;
  }
  apellidoMaterno: string;
  apellidoPaterno: string;
  nombres: string;
  sexo: string;
  fechaNacimiento: string;
  ubicacion: Ubication;
  curp: string;
  altura: string;
  peso: string;
  tipoSangre: string;
  usoLentes: boolean;
  alergico: boolean;
}

// export const StudentConverter = {
//   toFirestore: (student: Student) => {
//     return {
//       lastFirstName: student.apellidoMaterno,
//       lastSecondName: student.apellidoPaterno,
//       names: student.nombres,
//       sex: student.sexo,
//       bornDate: student.fechaNacimiento,
//       ubication: student.ubicacion,
//       curp: student.curp,
//       height: student.altura,
//       weight: student.peso,
//       bloodType: student.tipoSangre,
//       glasses: student.usoLentes,
//       alergic: student.alergico,
//     };
//   },
//   fromFirestore: (snapshot: any, options: any) => {
//     const data = snapshot.data(options);
//     return new Student(
//       data.apellidoMaterno,
//       data.apellidoPaterno,
//       data.nombres,
//       data.sexo,
//       data.fechaNacimiento,
//       data.ubicacion,
//       data.curp,
//       data.altura,
//       data.peso,
//       data.tipoSangre,
//       data.usoLentes,
//       data.alergico
//     );
//   },
// };
