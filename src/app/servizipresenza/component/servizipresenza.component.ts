import { Component, OnInit } from '@angular/core';
import {ServizipresenzaModel} from "../models/servizipresenza.models";
import {InfoService} from "../service/servizipresenza.service";

@Component({
  selector: 'app-servizipresenza',
  templateUrl: './servizipresenza.component.html',
  styleUrls: ['./servizipresenza.component.css'],
  providers: [InfoService]
})
export class ServizipresenzaComponent implements OnInit {
  public info:ServizipresenzaModel[]=[];
  constructor(public infoService:InfoService) {

  }

  ngOnInit(): void {
    this.info = this.infoService.getInfo();
    console.log(this.info);
  }
}
