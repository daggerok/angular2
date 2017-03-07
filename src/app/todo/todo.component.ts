import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.styl'],
})
export class TodoComponent implements OnInit {
  public showDialog = false;
  public editingTodo: Todo = null;
  public fieldValue = this.initialFieldValue();
  public todos: Array<Todo> = [];
  public okButtonText = this.initialOkButtonText();

  constructor() { }
  public ngOnInit() {}

  private initialFieldValue(): string {
    return '';
  }

  private initialOkButtonText(): string {
    return 'Create task';
  }

  public todoDialog(todo: Todo = null) {
    this.okButtonText = this.initialOkButtonText();
    this.fieldValue = this.initialFieldValue();
    this.editingTodo = todo;

    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'edit task';
    }

    this.showDialog = true;
  }

  public updateTodo(title: string) {
    this.showDialog = false;
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  private addTodo(title: string) {
    this.todos.push({ title, completed: false });
  }

  private editTodo(title: string) {
    this.editingTodo.title = title;
  }

  public remove(id: number): void {
    this.todos.splice(id, 1);
  }

  private hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null;
  }
}
