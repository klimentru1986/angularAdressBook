import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  template: `
    <div class="header-container">
      <span class="header-img"></span>
      <h1 class="header-title">{{header}}</h1>
    </div>`,
  styleUrls: ['header.component.css']
})

export class AppHeader {
  header: string = "Книга контактов";
}
