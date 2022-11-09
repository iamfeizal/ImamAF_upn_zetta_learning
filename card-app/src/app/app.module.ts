import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/module';
import { LoggingService } from './logging.service';
import { ItemsService } from './items.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [LoggingService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
