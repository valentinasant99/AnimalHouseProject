import { Component, OnInit } from '@angular/core';
import {CuriositaModel} from "../models/curiosita.model";
import {InfoService} from "../service/curiosita.service";

@Component({
  selector: 'app-curiosita',
  templateUrl: './curiosita.component.html',
  styleUrls: ['./curiosita.component.css'],
  providers: [InfoService]
})
export class CuriositaComponent implements OnInit {
  public info:CuriositaModel[]=[];
  constructor(public infoService:InfoService) {

  }

  ngOnInit(): void {
    this.info = this.infoService.getInfo();
    console.log(this.info);
  }
}
