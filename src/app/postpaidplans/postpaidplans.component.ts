import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';

import { Postpaid } from '../postpaid';
import { PrepaidplansService } from '../prepaidplans.service';

@Component({
  selector: 'app-postpaidplans',
  templateUrl: './postpaidplans.component.html',
  styleUrls: ['./postpaidplans.component.css']
})
export class PostpaidplansComponent implements OnInit {

  constructor(private _prepaidplansservice : PrepaidplansService) { }

  public plans : Postpaid[] = []

  public isOdd(elem:any){
    // console.log(elem, this.plans[elem].amt)
    if (elem % 2 != 0){
      return true
    }else{
      return false;
    }
  }
  ngOnInit(): void {
    this._prepaidplansservice.showPostpaidPlans().subscribe((data: Postpaid[])=>{
      data.sort((a,b)=> a.amt <= b.amt ? -1 : 1);
      this.plans = data;
    })

  }

}
