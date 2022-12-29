import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postuser(data : any){
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts",data)
  }
  getUser(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
}
