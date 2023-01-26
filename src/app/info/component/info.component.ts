import { Component, OnInit } from '@angular/core';

import {InfoModel} from "../models/info.model";
import {InfoService} from "../service/info.service";


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [InfoService]
})
export class InfoComponent implements OnInit {
  public info:InfoModel[]=[];
  constructor(public infoService:InfoService) {

  }

  ngOnInit(): void {
    this.info = this.infoService.getInfo();
    console.log(this.info);
  }
}
