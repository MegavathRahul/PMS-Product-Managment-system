import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewmobile',
  templateUrl: './viewmobile.component.html',
  styleUrl: './viewmobile.component.css'
})
export class ViewmobileComponent implements OnInit {
  mobiles: Product[] = [];

  //inject obj of DataService class
  constructor(private dsObj: DataService) {
  }

  ngOnInit() {

    this.dsObj.getMobilesData().subscribe(
      data => {
        this.mobiles = data;
      },
      err => {
        console.log("err is ", err)
      }
    )

  }

}
