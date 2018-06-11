import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from '../currency-list/currency-list.component';
import { Currency } from 'src/app/share/models/currency';
import { CurrencyType } from 'src/app/share/models/currency-type.enum';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
  ],
  imports: [
    BrowserModule,
    Currency,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
