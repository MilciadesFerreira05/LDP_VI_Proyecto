import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore : Firestore = inject(Firestore);

  constructor() { }

  getCollection<tipo>(enlace: string){
    const documents = collection(this.firestore, enlace);
    return collectionData(documents) as Observable<tipo[]>;
  }

  
}
