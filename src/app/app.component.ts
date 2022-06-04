import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todoist';

  taskList:any[] = [{ taskId: 0, taskName: "Hello how are you??" }];

  addTask(task:string){
    //console.log(task);
    this.taskList.push({taskId: this.taskList.length, taskName: task});
  }
  removeTask(id:number){
    this.taskList = this.taskList.filter(iteam=>iteam.taskId!==id);
  }
}
