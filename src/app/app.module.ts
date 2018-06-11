import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrencyListComponent } from '../currency-list/currency-list.component';
import { Currency } from 'src/app/share/models/currency';
import { CurrencyType } from 'src/app/share/models/currency-type.enum';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'currency',
    component: CurrencyListComponent
  },
  {
    path: 'currency/:id',
    component: CurrencyDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
