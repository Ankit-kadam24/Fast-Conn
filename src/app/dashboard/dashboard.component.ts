import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { PrepaidplansService } from '../prepaidplans.service';
import { SimrequestService } from '../simrequest.service';
import { Prepaid } from '../prepaid';
import { Postpaid } from '../postpaid';
import { Simrequest} from "../simrequest";
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public requests: Simrequest[]=[]
  constructor(private _prepaidplansservice : PrepaidplansService, private _simrequestservice:SimrequestService) { }
  // constructor() {}
  public preorpost = false;
  public plans = []
  public section = 0
  public choosePanel1(){
    this.section = 1
  }
  public choosePanel2(){
    this.section = 2
  }
  public choosePanel3(){
    this.section = 3
  }
  public choosePanel4(){
    this.section = 4
  }

  public toggleToPre(){
    this.preorpost = true;
  }
  public toggleToPost(){
    this.preorpost = false;
  }
  ngOnInit(): void {
    this._simrequestservice.showRequest().subscribe(datas=>{
      this.requests = datas;
      console.log(datas)
    })

  }

  public onClickSubmit(data : Prepaid[]){
    this._prepaidplansservice.addPlan(data).subscribe(data1 =>{
      console.log("Partly successful!!"+data1);
    })
  }

  public onClickSubmitPostpaid(data: Postpaid[]){
    this._prepaidplansservice.addPostpaidPlan(data).subscribe(data2=>{
      console.log("Done!" + data2);
    })
  }

}
