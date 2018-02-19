import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  number: number;
  coinBalanceObject: any = {};
  idNumber: any;
  transactionObject: any = {};
  balance: number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getIdFromService()
  }

  getCoinBalanceFromService(){
    this.coinBalanceObject = this._httpService.getCoinBalance();
    console.log(this.coinBalanceObject);
  }

  getIdFromService(){
    this.idNumber = this._httpService.getIdNumber();
  }

  onSubmit(){
    if(this.number == 13){
      // console.log("THIS IS 13");
      this.getCoinBalanceFromService();
      this.balance = this.coinBalanceObject.coinBalance;
      this._httpService.increaseCoin();
      this.number = 0;

      this.transactionObject = {
        action: "Mined",
        amount: 1,
        balance: this.balance + 1,
        id: this.idNumber + 1
      }
      this._httpService.addToTransactionArr(this.transactionObject);
    } else {
        console.log("Try again");
        this.number = 0;
    }    
  }

}
