import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewbike',
  templateUrl: './viewbike.component.html',
  styleUrl: './viewbike.component.css'
})
export class ViewbikeComponent implements OnInit{
  bikes: Product[] = [];

  //inject obj of DataService class
  constructor(private dsObj: DataService) {
  }

  ngOnInit() {
    debugger  

    this.dsObj.getBikesData().subscribe(
      data => {
        this.bikes = data;
      },
      err => {
        console.log("err is ", err)
      }
    )

  }

}
