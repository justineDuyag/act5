import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  [x: string]: any;

  collectionName = 'Contacts';

  constructor(
    private firestore: AngularFirestore
  ) { }

  createContact(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readC() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }


  deleteContact(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }
}
