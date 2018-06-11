import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency } from '../models/currency';
import { CURRENCIES } from '../data/mock-currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private currency: Currency,
  ) {
    currency = new Currency();
  }

  // public getCurrencies(): Observable<Currency>[];

}
