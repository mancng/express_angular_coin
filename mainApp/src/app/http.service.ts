import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  
  earnedCoin: any = {coinBalance : 0};
  transactions: any = [];
  idNum: number =  this.transactions.length;
  singleTransaction: any = {};

  constructor(private _http: HttpClient) { };

  getIdNumber(){
    return this.idNum;
  }

  increaseCoin(){
    this.earnedCoin.coinBalance += 1;
    return this.earnedCoin;
  };

  getCoinBalance(){
    return this.earnedCoin;
  };

  addToTransactionArr(transactionObj){
    var newIdNum = this.idNum += 1;
    this.idNum = newIdNum
    transactionObj.id = newIdNum
    this.transactions.push(transactionObj)
    this.earnedCoin.coinBalance = transactionObj.balance
    return {message: "savedProperly"}
  }

  getTransactions(){
    return this.transactions
  }

  getSingleTransaction(id){
    this.singleTransaction = this.transactions[id-1];
    return this.singleTransaction;
  }

}
