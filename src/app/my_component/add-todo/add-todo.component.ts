import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  sno: number = 1;
  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const todo: Todos = {
      sno: this.sno,
      title: this.title,
      desc: this.desc,
      isActive: true,
    };
    this.addTodo.emit(todo);
    this.sno++;
    this.title = '';
    this.desc = '';
  }
}
