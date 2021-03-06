import { Component, Input, OnInit, HostListener, HostBinding } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() post?: Post;
  @HostBinding('class.flipAnimation') flipAnimation: boolean = false;
  showUserId = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click') onClick() {
    this.flipAnimation = true;
    setTimeout(() => {
      this.flipAnimation = false;
      this.showUserId = !this.showUserId;
    }, 400);
  }
}
