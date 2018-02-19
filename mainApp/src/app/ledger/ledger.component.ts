import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  transactions: any = [];
  transaction: object = {};

  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(){
    this.getTransactionsFromService();
  }

  getTransactionsFromService(){
    this.transactions = this._httpService.getTransactions();
  }

  onClick(){
    this._route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this._httpService.getSingleTransaction(params.get('id'))
      .subscribe((data: any)=>{
        this.transaction = data;
      })
    })
  }

}
