import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
  private db = getFirestore();
  constructor() {}

  public storeStudent()
}
