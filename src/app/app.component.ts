import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { PostService } from './services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jsonph-client';
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
