import { Injectable } from '@angular/core';
import {PaginavideoModel} from "../model/paginavideo.model";

@Injectable(

)
export class InfoService{

  constructor() {}
  public getInfo():PaginavideoModel[]{
    return [
      {
        "title": 'Qualcosa',
        "link": 'https://www.youtube.com/embed/cxpXsYCe7Dk'
      },
      {
        "title": 'Qualcosa',
        "link": 'https://www.youtube.com/embed/cxpXsYCe7Dk'
      },
      {
        "title": 'Qualcosa',
        "link": 'https://www.youtube.com/embed/cxpXsYCe7Dk'
      }

    ]
  }

}
