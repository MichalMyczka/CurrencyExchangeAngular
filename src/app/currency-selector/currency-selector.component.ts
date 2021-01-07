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
    this.currentCurrencyCode = (<HTMLInputElement>event.target).value;
    this.selectedCurrency.emit(this.currentCurrencyCode);

    function myFunction(){
      switch((<HTMLInputElement>event.target).value){
        case 'HKD':
          document.body.style.backgroundImage = "url('../assets/Hong-Kong-dollar.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'PHP':
          document.body.style.backgroundImage = "url('../assets/Philippines-peso.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'DKK':
          document.body.style.backgroundImage = "url('../assets/Danish-krone.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'HUF':
          document.body.style.backgroundImage = "url('../assets/Hungarian-forint.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'CZK':
          document.body.style.backgroundImage = "url('../assets/Czech-koruna.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'AUD':
          document.body.style.backgroundImage = "url('../assets/Australian-dollar.png')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'RON':
          document.body.style.backgroundImage = "url('../assets/Romanian-leu.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'SEK':
          document.body.style.backgroundImage = "url('../assets/Swedish-krona.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'IDR':
          document.body.style.backgroundImage = "url('../assets/indonesian-rupiah.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'INR':
          document.body.style.backgroundImage = "url('../assets/India-rupees.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'BRL':
          document.body.style.backgroundImage = "url('../assets/real-currency-spotlight.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'RUB':
          document.body.style.backgroundImage = "url('../assets/Russian-rouble.png')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'HRK':
          document.body.style.backgroundImage = "url('../assets/Croatian-kuna.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'JPY':
          document.body.style.backgroundImage = "url('../assets/Japanese-yen.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'THB':
          document.body.style.backgroundImage = "url('../assets/Thai-baht.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'GBP':
          document.body.style.backgroundImage = "url('../assets/pound-sterling.png')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'USD':
          document.body.style.backgroundImage = "url('../assets/u.s-dollar.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'CHF':
          document.body.style.backgroundImage = "url('../assets/swiss-franc.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'EUR':
          document.body.style.backgroundImage = "url('../assets/euro.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'SGD':
          document.body.style.backgroundImage = "url('../assets/singapore-dollar.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'PLN':
          document.body.style.backgroundImage = "url('../assets/polish-zloty.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'BGN':
          document.body.style.backgroundImage = "url('../assets/bulgarian-lev.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'TRY':
          document.body.style.backgroundImage = "url('../assets/turkish-lira.jpeg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'CNY':
          document.body.style.backgroundImage = "url('../assets/chinese-yuan-renminbi.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'NOK':
          document.body.style.backgroundImage = "url('../assets/norwegian-krone-1.png')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'NZD':
          document.body.style.backgroundImage = "url('../assets/new-zealand-dollar.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'ZAR':
          document.body.style.backgroundImage = "url('../assets/south-african-rand.webp')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'MXN':
          document.body.style.backgroundImage = "url('../assets/mexican-peso.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'ILS':
          document.body.style.backgroundImage = "url('../assets/israeli-shekel.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'KRW':
          document.body.style.backgroundImage = "url('../assets/south-korean-won.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        case 'MYR':
          document.body.style.backgroundImage = "url('../assets/malaysian-ringgit.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
        default:
          document.body.style.backgroundImage = "url('../assets/euro.jpg')";
          document.body.style.backgroundSize = "cover";
          break;
      }
    }
    myFunction();
  }
}
