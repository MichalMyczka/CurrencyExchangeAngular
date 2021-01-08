import { Currencies } from './model/currencies.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyListService {

  private currencies: Currencies = {
    "EUR": {
      currency: 'Euro',
      weight: 10,
      display: true
    },
    "CAD": {
      currency: 'Canadian dollar',
      weight: 10,
      display: false
    },
    "HKD": {
      currency: 'Hong Kong dollar',
      weight: 10,
      display: false
    },
    "ISK": {
      currency: 'Icelandic krona',
      weight: 10,
      display: false
    },
    "PHP": {
      currency: 'Philippine peso',
      weight: 10,
      display: false
    },
    "DKK": {
      currency: 'Danish krone',
      weight: 10,
      display: false
    },
    "HUF": {
      currency: 'Hungarian forint',
      weight: 10,
      display: false
    },
    "CZK": {
      currency: 'Czech koruna',
      weight: 10,
      display: false
    },
    "AUD": {
      currency: 'Australian dollar',
      weight: 10,
      display: false
    },
    "RON": {
      currency: 'Romanian leu',
      weight: 10,
      display: false
    },
    "SEK": {
      currency: 'Swedish krona',
      weight: 10,
      display: false
    },
    "IDR": {
      currency: 'Indonesian rupiah',
      weight: 10,
      display: false
    },
    "INR": {
      currency: 'Indian rupee',
      weight: 10,
      display: false
    },
    "BRL": {
      currency: 'Brazilian real',
      weight: 10,
      display: false
    },
    "RUB": {
      currency: 'Russian rouble',
      weight: 10,
      display: false
    },
    "HRK": {
      currency: 'Croatian kuna',
      weight: 10,
      display: false
    },
    "JPY": {
      currency: 'Japanese yen',
      weight: 10,
      display: false
    },
    "THB": {
      currency: 'Thai baht',
      weight: 10,
      display: false
    },
    "CHF": {
      currency: 'Swiss franc',
      weight: 10,
      display: true
    },
    "SGD": {
      currency: 'Singapore dollar',
      weight: 10,
      display: false
    },
    "PLN": {
      currency: 'Polish zloty',
      weight: 10,
      display: false
    },
    "BGN": {
      currency: 'Bulgarian lev',
      weight: 10,
      display: false
    },
    "TRY": {
      currency: 'Turkish lira',
      weight: 10,
      display: false
    },
    "CNY": {
      currency: 'Chinese yuan renminbi',
      weight: 10,
      display: false
    },
    "NOK": {
      currency: 'Norwegian krone',
      weight: 10,
      display: false
    },
    "NZD": {
      currency: 'New Zealand dollar',
      weight: 10,
      display: false
    },
    "ZAR": {
      currency: 'South African rand',
      weight: 10,
      display: false
    },
    "USD": {
      currency: 'US dollar',
      weight: 10,
      display: true
    },
    "MXN": {
      currency: 'Mexican peso',
      weight: 10,
      display: true
    },
    ILS: {
      currency: 'Israeli shekel',
      weight: 10,
      display: false
    },
    GBP: {
      currency: 'Pound sterling',
      weight: 10,
      display: true
    },
    KRW: {
      currency: 'South Korean won',
      weight: 10,
      display: false
    },
    MYR: {
      currency: 'Malaysian ringgit',
      weight: 10,
      display: true
    }
  };

  getCurrencies(): Currencies {
    const availableValues = Object.keys(this.currencies).reduce((prevValue, currentValue) => {
      if (this.currencies[currentValue].display) {
        console.log(this.currencies[currentValue]);
        prevValue[currentValue] = this.currencies[currentValue];
      }
      return prevValue;
    }, {});
    return availableValues;
  }



  generateBaseCurrencies(currencyCodes: string[]): Currencies {
    const baseCurrencies = currencyCodes.reduce((prevValue, currentValue) => {
      if (this.currencies[currentValue].display) {
        prevValue[currentValue] = this.currencies[currentValue];
      }
      return prevValue;
    }, {});
    return baseCurrencies;
  }
}
