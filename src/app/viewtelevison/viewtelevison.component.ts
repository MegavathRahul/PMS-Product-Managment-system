import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewtelevison',
  templateUrl: './viewtelevison.component.html',
  styleUrl: './viewtelevison.component.css'
})
export class ViewtelevisonComponent implements OnInit {
  televisions: Product[] = [];

  //inject obj of DataService class
  constructor(private dsObj: DataService) {
  }

  ngOnInit() {

    this.dsObj.getTelevisionData().subscribe(
      data => {
        this.televisions = data;
      },
      err => {
        console.log("err is ", err)
      }
    )

  }

}
