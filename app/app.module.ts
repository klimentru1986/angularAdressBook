//Импорт модулей angular
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
//Импорт модуля InMemory (эммитация бэкэнда)
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
//Импорт компонентов используемых в модуле
import {ContactsBook}  from './contactsBook/contactsBook.component';
import {AppHeader} from './headerComponent/header.component';
import {ContactsList} from './contactsList/contactsList.component';
import {ContactDetails}  from './contactDetails/contactDetails.component';
import {AddContact} from "./addContact/addContact.component";
//Импорт сервисов
import {ContactsService} from './contactsService/contacts.service';

//Декоратор NgModule
@NgModule({
  //Добавление в модуль используемых внешних библиотек
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  //Декларирование в модуле компонентов
  declarations: [ContactsBook, AppHeader, ContactsList, ContactDetails, AddContact],
  //Декларирование используемых сервисов
  providers: [ContactsService],
  //Определение стартового компонента
  bootstrap: [ContactsBook]
})
export class AppModule {}
