import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Television } from '../models/television.model';

@Component({
  selector: 'app-addnewtelevision',
  templateUrl: './addnewtelevision.component.html',
  styleUrl: './addnewtelevision.component.css'
})
export class AddnewtelevisionComponent implements OnInit {
  constructor(private dsObj: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  televisonModel = new Television('', '', '');
  onSubmitNewTelevision() {
    this.dsObj.createNewTelevision(this.televisonModel).subscribe
      (
        res => {
          //navigate to viewtelevision component

          this.router.navigateByUrl("products/televisions");
        },
        err => {
          console.log(" error creating in new television", err);
        }
      )

  }

}
