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
    // console.log('ngOnInit Called!');
    // console.log('Text : ' + this.header.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges Called!');
    // console.log(changes);
  }
  changeItemStatus() {
    // if (this.items.itemStatus === 'Good') {
    // }
  }
  ngDoCheck() {
    // console.log('ngDoCheck Called');
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit Called!');
    // console.log('Text : ' + this.header.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit Called!');
    // console.log('Text : ' + this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called!');
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroyCalled');
  }

}
