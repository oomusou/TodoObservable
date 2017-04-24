import {Component} from '@angular/core';
import {TodoService} from '../../services/todo/todo.service';
import {Todo} from '../../models/todo';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }

    this.todoService.addTodo(input.value);

    input.value = '';
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
