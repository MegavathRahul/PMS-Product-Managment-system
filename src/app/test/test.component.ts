import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { post } from '../models/posts.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  myPosts: post[] = [];

  users:any;

  // inject fake data service
  constructor(private fsObj: FakedataService,private router:Router) {

  }
  ngOnInit(): void {                     //subscribe method will get stream of data from objects
    this.fsObj.getPosts().subscribe(
      UserData => {
        // assign post
        this.users=UserData;
         console.log(this.users)

      },
      err => {
        console.log("err in getting post data", err)
      }
    )
  }
  onSelectId(id:any){
    this.router.navigateByUrl('test/'+id)

  }

}
