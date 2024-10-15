import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Bike } from '../models/bike.model';

@Component({
  selector: 'app-addnewbike',
  templateUrl: './addnewbike.component.html',
  styleUrl: './addnewbike.component.css'
})
export class AddnewbikeComponent implements OnInit {
  constructor(private dsObj: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  bikeModel = new Bike('', '', '');

  onSubmitNewBike() {
    debugger
    this.dsObj.createNewBike(this.bikeModel).subscribe
      (

        res => {
          //navigate to viewmobiles component

          this.router.navigateByUrl("products/bikes");
        },
        err => {
          console.log(" error creating in new bikes", err)
        }
      )

  }

}