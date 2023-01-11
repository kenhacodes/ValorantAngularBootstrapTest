import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IdService {

  URL = 'https://valorant-api.com/v1/agents/'

  constructor(private http: HttpClient) { }

  getIdes():any{
    return this.http.get(this.URL + "?isPlayableCharacter=true");
  }

  getId(uuid:string):any{
    console.log("link es "+`${this.URL}${uuid}`)
    return this.http.get(`${this.URL}${uuid}`);
  }


}
