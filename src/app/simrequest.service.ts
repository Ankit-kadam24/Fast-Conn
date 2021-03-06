import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Simrequest } from "./simrequest"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SimrequestService {

  constructor(private http: HttpClient) { }
  public baseURL = "http://localhost:3000/";

  public addPrepaidRequest(data: Simrequest[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Simrequest[]>(this.baseURL + "newprepaidrequest/", data);
  }

  public showRequest(){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.get<Simrequest[]>(this.baseURL+ "admin-dashboard/")
  }

  public addPostpaidRequest(data: Simrequest[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Simrequest[]>(this.baseURL + "newpostpaidrequest/", data);
  }
}
