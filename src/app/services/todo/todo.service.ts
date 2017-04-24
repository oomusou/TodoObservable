import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {INITIAL_TODO_STATE, TodoState} from './todo-state';
import 'rxjs/add/operator/pluck';

@Injectable()
export class TodoService {
  private subject = new BehaviorSubject<TodoState>(INITIAL_TODO_STATE);

  getTodos(): Observable<Todo[]> {
    return this.subject.pluck('todos');
  }

  getLastUpdate(): Observable<Date> {
    return this.subject.pluck('lastUpdate');
  }

  addTodo(title: string) {
    const {todos} = this.subject.getValue();

    this.subject.next({
      todos: [...todos, {
        id: todos.length + 1,
        title: title
      }],
      lastUpdate: new Date()
    });
  }

  removeTodo(id: number) {
    const {todos} = this.subject.getValue();

    this.subject.next({
      todos: todos.filter(todo => todo.id !== id),
      lastUpdate: new Date()
    });
  }

  clearTodos() {
    this.subject.next({
      todos: [],
      lastUpdate: new Date()
    });
  }
}
