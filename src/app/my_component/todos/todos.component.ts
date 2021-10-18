import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  cheer: string = 'Hurrayyyhh';
  todos: Todos[];
  localItems: string | null;
  constructor() {
    this.localItems = localStorage.getItem('todos');
    if (this.localItems === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItems);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todos) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoAdd(todo: Todos) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
