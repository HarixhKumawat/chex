import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos!:Todo[];
  
  inputTodo!:string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:'One',
        complete: false
      },
      {
        content:'Two',
        complete: true
      }
    ]
  }

  done(id: number){
    this.todos.map((v, i) => {
      if (i == id) {
        v.complete = !v.complete;
      }
      return v; 
    })
  }

  delete(id: number){
    this.todos = this.todos.filter((v ,i) => i !== id);
  }

  add(){
    this.todos.push({
      content: this.inputTodo,
      complete: false
    })
    this.inputTodo = "";
  }

}
