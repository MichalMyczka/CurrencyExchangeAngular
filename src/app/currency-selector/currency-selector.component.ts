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
