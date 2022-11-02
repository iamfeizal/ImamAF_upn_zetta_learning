import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-card';
  taskElements = [{type:'individual',name:'First Assignment',content:'Create An Angular Project'}];

  onTaskAdded(taskData: {taskName:string,taskContent:string}) {
    this.taskElements.push({
      type: 'individual',
      name: taskData.taskName,
      content: taskData.taskContent
    });
  }

  onGroupTaskAdded(groupTaskData: {taskName:string,taskContent:string}) {
    this.taskElements.push({
      type: 'group',
      name: groupTaskData.taskName,
      content: groupTaskData.taskContent
    });
  }

  onDestroy(){
    this.taskElements.splice(0,100);
  }
}
