import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { Student } from 'src/models/Student.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firebaseConfig: Object = {
    apiKey: 'AIzaSyDdsu91pucnzy-QSNvjmJeB3qz3KAvj8Z0',
    authDomain: 'systemalbi-40516.firebaseapp.com',
    projectId: 'systemalbi-40516',
    storageBucket: 'systemalbi-40516.appspot.com',
    messagingSenderId: '661215709192',
    appId: '1:661215709192:web:33367f2dc9344c627e69bd',
  };
  private app: FirebaseApp = initializeApp(this.firebaseConfig);
  private db = getFirestore(this.app);
  constructor() {}

  public async storeStudent(student: Student) {
    try {
      const newStudent = collection(this.db, 'students');
      await addDoc(newStudent, {
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
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
