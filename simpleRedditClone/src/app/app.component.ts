import { Article } from './article/aticle.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[] = [];
constructor(){
  this.articles = [ new Article('Angular', 'http://angular.io', 10),
    new Article('Angular 2', 'http://angular.io', 22),
    new Article('Full stack', 'http://angular.io', 2)]  ;
}
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
title.value = '';
link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
