import { Component, Input, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common'

import { PrepaidplansService } from '../prepaidplans.service';
import { Prepaid } from '../prepaid';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  public plans : Prepaid[] = []  ;
  constructor(private _prepaidplansservice : PrepaidplansService) { 
   }

  public isOdd(elem:any){
    // console.log(elem, this.plans[elem].amt)
    if (elem % 2 != 0){
      return true
    }else{
      return false;
    }
  }
  ngOnInit(){
    this._prepaidplansservice.showPlans().subscribe((data: Prepaid[])=>{
      data.sort((a,b)=> a.amt < b.amt ? -1 : 1);
      this.plans = data;
    })
  }

}
