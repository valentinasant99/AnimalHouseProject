import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-bachecaadmin',
  templateUrl: './bachecaadmin.component.html',
  styleUrls: ['./bachecaadmin.component.css']
})
export class BachecaadminComponent {
  public posts: any[] = [];

  constructor(private http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get('http://localhost:3000/Bacheca')
      .subscribe(response => {
        this.posts = response as any[];
        console.log('Post recuperati con successo ', this.posts);
      });
  }

  deletePost(post: any) {
    this.http.delete(`http://localhost:3000/Bacheca/${post.id}`)
      .subscribe(response => {
        console.log('Post eliminato con successo ', response);
        this.getPosts();
      });
  }
}
