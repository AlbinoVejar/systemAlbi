import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { School } from 'src/models/School.model';
import { Student } from 'src/models/Student.model';
import { Ubication } from 'src/models/Ubication.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly mainKey = environment.firebase;
  private app: FirebaseApp = initializeApp(this.mainKey);
  private db = getFirestore(this.app);
  constructor() {}

  public async getAllStudents(active: boolean) {
    try {
      const collectionReference = query(
        collection(this.db, 'students'),
        where('active', '==', active)
      );
      const result = await getDocs(collectionReference);
      var data: Student[] = [];
      result.forEach((doc) => {
        if (doc.exists()) {
          const id = doc.id;
          const read = doc.data();
          const school = read.school;
          const ubication = read.ubication;
          console.log(id);
          data.push(
            new Student(
              new School(
                school.category,
                school.campus,
                school.grade,
                school.section
              ),
              read.lastFirstName,
              read.lastSecondName,
              read.names,
              read.sex,
              read.bornDate,
              new Ubication(
                ubication.city,
                ubication.address,
                ubication.colony,
                ubication.postalCode,
                ubication.phone
              ),
              read.curp,
              read.height,
              read.weight,
              read.bloodType,
              Boolean(read.glasses),
              Boolean(read.alergic),
              id
            )
          );
        }
      });
      return data;
    } catch (err) {
      return [];
    }
  }

  public async getStudent(student: Student) {
    try {
      const studentReference = doc(this.db, 'students', `${student.id}`);
      const result = await getDoc(studentReference);
      var toReturn = null;
      if (result.exists()) {
        const id = result.id;
        const read = result.data();
        const dataSchool = read.school;
        const dataUbication = read.ubication;
        const school = new School(
          dataSchool.category,
          dataSchool.campus,
          dataSchool.grade,
          dataSchool.section
        );
        const ubication = new Ubication(
          dataUbication.city,
          dataUbication.address,
          dataUbication.colony,
          dataUbication.postalCode,
          dataUbication.phone
        );
        toReturn = new Student(
          school,
          read.lastFirstName,
          read.lastSecondName,
          read.names,
          read.sex,
          read.bornDate,
          ubication,
          read.curp,
          read.height,
          read.weight,
          read.bloodType,
          Boolean(read.glasses),
          Boolean(read.alergic),
          id
        );
      }
      return toReturn;
    } catch (err) {
      return null;
    }
  }

  public async storeStudent(student: Student) {
    try {
      const newStudent = collection(this.db, 'students');
      await addDoc(newStudent, {
        school: {
          category: student.escuela.gradoEscolar,
          section: student.escuela.seccion,
          grade: student.escuela.grado,
          campus: student.escuela.campus,
        },
        lastFirstName: student.apellidoMaterno,
        lastSecondName: student.apellidoPaterno,
        names: student.nombres,
        sex: student.sexo,
        bornDate: student.fechaNacimiento,
        ubication: {
          city: student.ubicacion.ciudad,
          address: student.ubicacion.direccion,
          colony: student.ubicacion.colonia,
          postalCode: student.ubicacion.codigoPostal,
          phone: student.ubicacion.telefono,
        },
        curp: student.curp,
        height: student.altura,
        weight: student.peso,
        bloodType: student.tipoSangre,
        glasses: student.usoLentes,
        alergic: student.alergico,
        active: true,
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public async updateStudent(student: Student) {
    try {
      const studentReference = doc(this.db, 'students', `${student.id}`);
      await setDoc(
        studentReference,
        {
          school: {
            category: student.escuela.gradoEscolar,
            section: student.escuela.seccion,
            grade: student.escuela.grado,
            campus: student.escuela.campus,
          },
          lastFirstName: student.apellidoMaterno,
          lastSecondName: student.apellidoPaterno,
          names: student.nombres,
          sex: student.sexo,
          bornDate: student.fechaNacimiento,
          ubication: {
            city: student.ubicacion.ciudad,
            address: student.ubicacion.direccion,
            colony: student.ubicacion.colonia,
            postalCode: student.ubicacion.codigoPostal,
            phone: student.ubicacion.telefono,
          },
          curp: student.curp,
          height: student.altura,
          weight: student.peso,
          bloodType: student.tipoSangre,
          glasses: student.usoLentes,
          alergic: student.alergico,
        },
        { merge: true }
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  public async deleteStudent(student: Student) {
    try {
      const studentReference = doc(this.db, 'students', `${student.id}`);
      await setDoc(studentReference, { active: false }, { merge: true });
      return true;
    } catch (err) {
      return false;
    }
  }
}
