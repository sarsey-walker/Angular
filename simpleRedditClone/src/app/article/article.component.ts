import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './aticle.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!:Article;

  constructor() {
    // this.article = new Article('Angular', 'http://angular.io', 10);
    // this.articles = [ new Article('Angular', 'http://angular.io', 10),
    // new Article('Angular', 'http://angular.io', 10),
    // new Article('Angular', 'http://angular.io', 10)]  ;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
  voteUp() {
    this.article.voteUp();
    return false;
  }
}
