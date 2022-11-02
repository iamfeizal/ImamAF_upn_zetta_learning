import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user = ['User1','User2','User3'];
  currentStatus1 = 'offline';
  currentStatus2 = 'offline';
  currentStatus3 = 'offline';
  status = true;

  changeStatus1(){
    this.currentStatus1 = "online";
  }
  changeStatus2(){
    this.currentStatus2 = "online";
  }
  changeStatus3(){
    this.currentStatus3 = "online";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
