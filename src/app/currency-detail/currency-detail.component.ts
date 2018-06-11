import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/share/models/currency';
import { CURRENCIES } from 'src/app/share/data/mock-currencies';
import { CurrencyService } from 'src/app/share/services/currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {
  currency = CURRENCIES;
  id: any;

  constructor(
    private currencyService: CurrencyService,
  ) { }

  ngOnInit() {
    this.getCurrencyById(this.id);
  }

  getCurrencyById(id) {
    return this.currencyService.getCurrencyById(this.currency[id]);
  }

}
