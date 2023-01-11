import { Component, OnInit } from '@angular/core';
import {Id} from "../../interfaces/id";
import {IdService} from "../../services/id.service";
import {ActivatedRoute} from "@angular/router";
import {Abilities} from "../../interfaces/abilities";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {


  agente : Id = {

  uuid: '',
  displayName:'',
  description: '',
  fullPortraitV2: '',
  developerName: '',
}
/*
  abilities : Abilities = {
    slot : '',
    displayName: '',
    description: '',
    displayIcon: ''
  }
*/

  constructor(private idservice: IdService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadAgente();

  }

  private loadAgente(){
    const params = this.activatedRoute.snapshot.params;

    this.idservice.getId(params['uuid']).subscribe((data: any) => {
      this.agente = data.data;
      //this.abilities = data.data.agente.abilities;

    })
  }

}
