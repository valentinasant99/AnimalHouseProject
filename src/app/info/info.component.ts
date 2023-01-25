import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }
}
