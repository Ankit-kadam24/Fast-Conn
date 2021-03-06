import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';

import { SimrequestService } from '../simrequest.service'
import { Simrequest } from "../simrequest"

@Component({
  selector: 'app-newpostpaid',
  templateUrl: './newpostpaid.component.html',
  styleUrls: ['./newpostpaid.component.css']
})
export class NewpostpaidComponent implements OnInit {

  constructor(private _simrequestservice : SimrequestService) { }

  ngOnInit(): void {
  }

  public submitData(data: Simrequest[]){
    this._simrequestservice.addPostpaidRequest(data).subscribe(data1=>{
      console.log(data1)
    })
  }
}
