import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/share/models/currency';
import { CURRENCIES } from 'src/app/share/data/mock-currencies';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

 currency = CURRENCIES;
 selectedCurrency: Currency;

  constructor() { }

  ngOnInit() {
  }

  onSelect(currency: Currency): void {
    this.selectedCurrency = currency;
  }

}
