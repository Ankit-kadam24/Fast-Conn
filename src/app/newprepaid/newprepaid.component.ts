import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';

import { SimrequestService } from '../simrequest.service'
import { Simrequest } from "../simrequest"

@Component({
  selector: 'app-newprepaid',
  templateUrl: './newprepaid.component.html',
  styleUrls: ['./newprepaid.component.css']
})
export class NewprepaidComponent implements OnInit {

  constructor(private _simrequestservice : SimrequestService) { }

  ngOnInit(): void {
  }

  public submitData(data: Simrequest[]){
    this._simrequestservice.addPrepaidRequest(data).subscribe(data1=>{
      console.log(data1)
    })
  }
}
