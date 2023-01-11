import { Component, OnInit } from '@angular/core';
import {Id} from "../../interfaces/id";
import {IdService} from "../../services/id.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  coleccion: any;
  ides: Id[] = [];

  constructor(private idservice: IdService) { }

  ngOnInit(): void {

    this.idservice.getIdes().subscribe((res: any) => {

      this.coleccion = res;
      console.log(this.coleccion)
      this.ides = this.coleccion.data;
      console.log(this.ides)
    })

  }

}
