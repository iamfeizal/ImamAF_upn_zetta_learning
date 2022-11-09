import { Component, OnInit, Input, EventEmitter, Output, OnChanges, ViewEncapsulation, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [],
})
export class CardComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, OnDestroy {

  @Input() items: { itemName: string; itemStatus: string };
  @Input() status: any;
  @ViewChild('heading', { static: true }) header: ElementRef;

  newItemStatus: string = '';

  constructor() {}

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  changeItemStatus() {
  }
  ngDoCheck() {
  }
  ngAfterContentInit(): void {
  }
  ngAfterViewInit(): void {
  }
  ngAfterContentChecked(): void {
  }
  ngOnDestroy(): void {
  }

}
