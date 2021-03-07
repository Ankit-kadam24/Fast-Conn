import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private _prepaidplansservice : PrepaidplansService, private _simrequestservice:SimrequestService, private _router : Router) { }
  // constructor() {}
  public preorpost = false;
  public customers : any= null;
  public special_customer :any = null; 
  public plans = []

  public defaulters : any[] =[]
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
      // console.log(datas)
    })

    this._simrequestservice.getDefaulters().subscribe(datas2=>{
      this.defaulters = datas2;
    });
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

public sendApproval(dataz: any){
    this._simrequestservice.addToActiveCustomer(dataz).subscribe(data3=>{
      console.log()
  })
}
public sendRejection(dataz: any){
  this._simrequestservice.deleteFromnewprepaid(dataz).subscribe(data3=>{
    console.log()
  });
  }

  public searchCustomer(data:any){
    this._simrequestservice.searchCust(data).subscribe(datax=>{
      this.customers = datax;
      console.log(datax);
    });
  }

  public sendMail(data:any){
    this._simrequestservice.sendMailCustomer(data).subscribe(datax=>{
      console.log("Mail sent successfully!");
      alert("Mail has been sent to: " + data.email);
    })
  }

  public checkReq(){
    if(this.requests[0]){
      return true;
    }else{
      return false;
    }
  }

  public cancelConnection(data:any){
    this._simrequestservice.cancelConnFromDefaulters(data).subscribe(datax=>{
      console.log("User removed permanently!");
    })
  }
}
