import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'app-homepageutente',
  templateUrl: './homepageutente.component.html',
  styleUrls: ['./homepageutente.component.css']
})
export class HomepageutenteComponent implements OnInit{
  public postForm !: FormGroup;
  public posts: any[] = [];

  constructor(private http: HttpClient) { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      image: new FormControl(''),
      text: new FormControl('')
    });

    this.getPosts();
  }

  onSubmit() {
    this.http.post('http://localhost:3000/Bacheca', this.postForm.value)
      .subscribe(response => {
        console.log('Post pubblicato con successo ', response);
        this.getPosts();
        this.postForm.reset();
      });
  }

  getPosts() {
    this.http.get('http://localhost:3000/Bacheca')
      .subscribe(response => {
        this.posts = response as any[];
        console.log('Post recuperati con successo ', this.posts);
      });
  }
}
