import { Component, OnInit } from '@angular/core';
import { Mobile } from '../models/mobile.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addmobile',
  templateUrl: './addmobile.component.html',
  styleUrl: './addmobile.component.css'
})
export class AddmobileComponent implements OnInit {
  constructor(private dsObj: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  mobileModel = new Mobile('', '', '');
  onSubmitNewMobile() {
    this.dsObj.createNewMobile(this.mobileModel).subscribe
      (
        res => {
          //navigate to viewmobiles component

          this.router.navigateByUrl("products/mobiles");
        },
        err => {
          console.log(" error creating in new mobile", err)
        }
      )
  }
}
