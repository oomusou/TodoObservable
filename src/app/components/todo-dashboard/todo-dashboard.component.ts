import {Component} from '@angular/core';
import {TodoService} from '../../services/todo/todo.service';
import {Todo} from '../../models/todo';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
})
export class TodoDashboardComponent {
  todos: Observable<Todo[]>;
  lastUpdate: Observable<Date>;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    this.lastUpdate = this.todoService.getLastUpdate();
  }

  clearTodos() {
    this.todoService.clearTodos();
  }
}
