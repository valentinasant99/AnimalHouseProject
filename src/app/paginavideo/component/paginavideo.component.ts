import { Component, OnInit } from '@angular/core';
import {PaginavideoModel} from "../model/paginavideo.model";
import {InfoService} from "../service/paginavideo.service";


@Component({
  selector: 'app-paginavideo',
  templateUrl: './paginavideo.component.html',
  styleUrls: ['./paginavideo.component.css'],
  providers: [InfoService]
})
export class PaginavideoComponent implements OnInit {
  public info:PaginavideoModel[]=[];
  constructor(public infoService:InfoService) {

  }

  ngOnInit(): void {
    this.info = this.infoService.getInfo();
    console.log(this.info);
  }
}
