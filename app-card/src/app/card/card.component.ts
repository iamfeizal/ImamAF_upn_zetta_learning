import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  newTaskName = '';
  newTaskContent = '';
  @Output() taskCreated = new EventEmitter<{taskName: string,taskContent: string}>();
  @Output()groupTaskCreated = new EventEmitter<{taskName: string,taskContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask() {
    this.taskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

  onAddGroupTask() {
    this.groupTaskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }
}
