import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepageutente',
  templateUrl: './homepageutente.component.html',
  styleUrls: ['./homepageutente.component.css']
})
export class HomepageutenteComponent implements OnInit{


  constructor() { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void {}

}
