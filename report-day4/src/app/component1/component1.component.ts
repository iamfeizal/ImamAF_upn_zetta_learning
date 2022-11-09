import { Component, OnInit, Input, EventEmitter, Output, OnChanges, ViewEncapsulation, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, OnDestroy {

  @Input()
  items!: { itemName: string; itemStatus: string; };
  @Input() status: any;
  @ViewChild('heading', { static: true })
  header!: ElementRef;
  newItemStatus: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit Called!');
    console.log('Text : ' + this.header.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }
  changeItemStatus() {
    if (this.items.itemStatus === 'Good') {
    }
  }
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit Called!');
    console.log('Text : ' + this.header.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit Called!');
    console.log('Text : ' + this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroyCalled');
  }

}
