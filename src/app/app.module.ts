import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './my_component/todos/todos.component';
import { TodoItemComponent } from './my_component/todo-item/todo-item.component';
import { AddTodoComponent } from './my_component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './my_component/about/about.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './my_component/contact/contact.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
