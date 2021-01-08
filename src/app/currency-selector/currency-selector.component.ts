import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'simple-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  @Input()
  currencyCodes: string[];

  @Output()
  selectedCurrency: EventEmitter<string> = new EventEmitter<string>();

  currentCurrencyCode: string;

  ngOnInit() {
    this.currentCurrencyCode = this.currencyCodes[0];
  }

  onChange(event: Event) {
    this.currentCurrencyCode = (<HTMLInputElement> event.target).value;
    this.selectedCurrency.emit(this.currentCurrencyCode);

    function myFunction(): void{
      // TODO move images name to currency-list.service.ts
      switch((<HTMLInputElement> event.target).value){
        case 'HKD':
          document.body.style.backgroundImage = "url('../assets/Hong-Kong-dollar.jpeg')";
          break;
        case 'PHP':
          document.body.style.backgroundImage = "url('../assets/Philippines-peso.jpeg')";
          break;
        case 'DKK':
          document.body.style.backgroundImage = "url('../assets/Danish-krone.jpeg')";
          break;
        case 'HUF':
          document.body.style.backgroundImage = "url('../assets/Hungarian-forint.jpeg')";
          break;
        case 'CZK':
          document.body.style.backgroundImage = "url('../assets/Czech-koruna.jpeg')";
          break;
        case 'AUD':
          document.body.style.backgroundImage = "url('../assets/Australian-dollar.png')";
          break;
        case 'RON':
          document.body.style.backgroundImage = "url('../assets/Romanian-leu.jpeg')";
          break;
        case 'SEK':
          document.body.style.backgroundImage = "url('../assets/Swedish-krona.jpeg')";
          break;
        case 'IDR':
          document.body.style.backgroundImage = "url('../assets/indonesian-rupiah.jpeg')";
          break;
        case 'INR':
          document.body.style.backgroundImage = "url('../assets/India-rupees.jpeg')";
          break;
        case 'BRL':
          document.body.style.backgroundImage = "url('../assets/real-currency-spotlight.jpeg')";
          break;
        case 'RUB':
          document.body.style.backgroundImage = "url('../assets/Russian-rouble.png')";
          break;
        case 'HRK':
          document.body.style.backgroundImage = "url('../assets/Croatian-kuna.jpeg')";
          break;
        case 'JPY':
          document.body.style.backgroundImage = "url('../assets/Japanese-yen.jpeg')";
          break;
        case 'THB':
          document.body.style.backgroundImage = "url('../assets/Thai-baht.jpeg')";
          break;
        case 'GBP':
          document.body.style.backgroundImage = "url('../assets/pound-sterling.png')";
          break;
        case 'USD':
          document.body.style.backgroundImage = "url('../assets/u.s-dollar.jpg')";
          break;
        case 'CHF':
          document.body.style.backgroundImage = "url('../assets/swiss-franc.jpg')";
          break;
        case 'EUR':
          document.body.style.backgroundImage = "url('../assets/euro.jpg')";
          break;
        case 'SGD':
          document.body.style.backgroundImage = "url('../assets/singapore-dollar.jpg')";
          break;
        case 'PLN':
          document.body.style.backgroundImage = "url('../assets/polish-zloty.jpg')";
          break;
        case 'BGN':
          document.body.style.backgroundImage = "url('../assets/bulgarian-lev.jpg')";
          break;
        case 'TRY':
          document.body.style.backgroundImage = "url('../assets/turkish-lira.jpeg')";
          break;
        case 'CNY':
          document.body.style.backgroundImage = "url('../assets/chinese-yuan-renminbi.jpg')";
          break;
        case 'NOK':
          document.body.style.backgroundImage = "url('../assets/norwegian-krone.png')";
          break;
        case 'NZD':
          document.body.style.backgroundImage = "url('../assets/new-zealand-dollar.jpg')";
          break;
        case 'ZAR':
          document.body.style.backgroundImage = "url('../assets/south-african-rand.webp')";
          break;
        case 'MXN':
          document.body.style.backgroundImage = "url('../assets/mexican-peso.jpg')";
          break;
        case 'ILS':
          document.body.style.backgroundImage = "url('../assets/israeli-shekel.jpg')";
          break;
        case 'KRW':
          document.body.style.backgroundImage = "url('../assets/south-korean-won.jpg')";
          break;
        case 'MYR':
          document.body.style.backgroundImage = "url('../assets/malaysian-ringgit.jpg')";
          break;
        default:
          document.body.style.backgroundImage = "url('../assets/euro.jpg')";
          break;
      }
      document.body.style.backgroundSize = 'cover';
    }
    myFunction();
  }
}
