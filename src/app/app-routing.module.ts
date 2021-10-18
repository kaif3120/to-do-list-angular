import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './my_component/todos/todos.component';
import { AboutComponent } from './my_component/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './my_component/contact/contact.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
