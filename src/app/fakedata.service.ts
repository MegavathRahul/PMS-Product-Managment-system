import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {
  getMobilesData() {
    throw new Error('Method not implemented.');
  }

  // inject Httpclient object
  constructor(private hc: HttpClient) { }


  getPosts(): Observable<post[]> {
    return this.hc.get<post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id :any):Observable<any>{
    return this.hc.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

 // getUsers(): Observable<any> {                                               // here any will work but it does not provide data safety
   // return this.hc.get<any>('https://jsonplaceholder.typicode.com/posts')
  //}
}
