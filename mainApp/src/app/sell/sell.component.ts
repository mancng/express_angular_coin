import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  number: number;
  coinBalanceObject: any = {};
  idNumber: any;
  transactionObject: any = {};
  balance: number;
  amount: number;

  constructor(private _httpService: HttpService, private messageService: MessageService) { }

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
    if(this.balance >= this.number){
      this.transactionObject = {
        action: "Sold",
        amount: Number(this.number),
        balance: Number(this.balance) - Number(this.number),
        id: this.idNumber + 1
      }
      this._httpService.addToTransactionArr(this.transactionObject);
      this.number = 0;
    } else {
      this.messageService.add('You do not have enough coins to sell.')
      console.log(" I don't have enough to sell")
    }
  
  }

}
