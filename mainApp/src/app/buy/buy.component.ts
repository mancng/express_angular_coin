import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  number: number;
  coinBalanceObject: any = {};
  idNumber: any;
  transactionObject: any = {};
  balance: number;
  amount: number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCoinBlanaceFromService();
    this.getIdFromService();
  }

  getCoinBlanaceFromService(){
    this.coinBalanceObject = this._httpService.getCoinBalance();
  }

  getIdFromService(){
    this.idNumber = this._httpService.getIdNumber();
  }

  onSubmit(){
    this.balance = this.coinBalanceObject.coinBalance;
    this.transactionObject = {
      action: "Bought",
      amount: Number(this.number),
      balance: Number(this.balance) + Number(this.number),
      id: this.idNumber + 1
    }
    this._httpService.addToTransactionArr(this.transactionObject);
    this.number = 0;
  }

}
