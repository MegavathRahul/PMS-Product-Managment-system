import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { post } from '../models/posts.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit {

  postObj!: post;
  constructor(private ar: ActivatedRoute, private fs: FakedataService) { //  to read parameters from url this service is required..!!

  }


  ngOnInit(): void {
    //get id from url

    let id = this.ar.snapshot.params['id'];

    // get data of post with this current id

    this.fs.getPostById(id).subscribe(
      obj => {
        this.postObj = obj;
      },
      err => {
        console.log("err in reading post", err)
      }
    )
  }

}
