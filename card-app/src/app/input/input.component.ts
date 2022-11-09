import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../logging.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: []
})
export class InputComponent implements OnInit {
  newItemName: string = '';
  newItemStatus: string = '';

  public defaultStatus: string = 'Broken';
  public defaultName: string = 'Item Default';

  @ViewChild('itemNameInput') itemNameInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private itemService: ItemsService
  ) {}

  ngOnInit(): void {}

  addItem(name: string, status: string) {
    this.itemService.onAddItems(name, status);
    console.log(this.itemNameInput);
    this.loggingService.logStatusChange(status);
  }
}
