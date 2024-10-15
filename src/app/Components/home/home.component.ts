import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  n: number = 100;
  constructor(private tsObj: TestService) {

  }

  ngOnInit() {
    this.tsObj.setData(this.n);



  }

}
