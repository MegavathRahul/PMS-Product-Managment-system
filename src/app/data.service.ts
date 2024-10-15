import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mobile } from './models/mobile.model';
import { Bike } from './models/bike.model';
import { Television } from './models/television.model';
Observable

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject HttpClient service object
  constructor(private hc: HttpClient) { }


  //to read all mobiles data

  getMobilesData(): Observable<Product[]> {
    //http get
    return this.hc.get<Product[]>("http://localhost:3000/mobiles")
  }

  //  to save/create new mobile

  createNewMobile(mobileobj: Mobile): Observable<any> {
    return this.hc.post("http://localhost:3000/mobiles", mobileobj)
  }



  updateMobile(modifiedMobileObj: Mobile): Observable<any> {
    return this.hc.put(`http://localhost:3000/mobiles/${modifiedMobileObj['id']}`, modifiedMobileObj);
  }




  //delete mobile
  deleteMobile(id: any): Observable<any> {

    console.log("id is ", id)
    return this.hc.delete("http://localhost:3000/mobiles/" + id)
  }

  getBikesData(): Observable<Product[]> {
    return this.hc.get<Product[]>("http://localhost:3000/bikes")
  }
  createNewBike(bikeobj: Bike): Observable<any> {
    return this.hc.post("http://localhost:3000/bikes", bikeobj)
  }

  getTelevisionData(): Observable<Product[]> {
    return this.hc.get<Product[]>("http://localhost:3000/televisions")
  }
  createNewTelevision(televisionobj: Television): Observable<any> {
    return this.hc.post("http://localhost:3000/televisions", televisionobj)
  }
}