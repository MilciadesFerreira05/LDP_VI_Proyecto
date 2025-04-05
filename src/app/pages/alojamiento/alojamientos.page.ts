import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Alojamientos } from 'src/app/models/alojamientos.model';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
  standalone: false
})
export class AlojamientoPage implements OnInit {

  alojamientos: any[] = [];

  constructor(
    private firestore: FirestoreService
  ) { 
    this.listarAlojamiento();
  }

  ngOnInit() {
    
  }


  listarAlojamiento(){
    this.firestore.getCollection<'Alojamientos'>('alojamientos').subscribe(data => {
        if (data)  this.alojamientos = data;
    });
  }
}
