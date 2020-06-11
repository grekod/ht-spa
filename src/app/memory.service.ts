import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { count } from 'rxjs/operators';
import { Memory } from './memory'

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private memoryUrl = 'http://localhost:5000/Memory';

  constructor(
    private httpClient: HttpClient,
  ) { }

  GetById(Id: Number): Observable<any>{
    const url = `${this.memoryUrl}/get/${Id}`
    return this.httpClient.get<any>(url);
  }

  GetAll(): Observable<Array<any>>{
    const url = `${this.memoryUrl}/getAll`
    return this.httpClient.get<Array<any>>(url);
  }

  Update(Id: Number, memory: Memory){
    const url = `${this.memoryUrl}/update/${Id}`
    return this.httpClient.put(url,memory)
    .subscribe(res => {
      console.log(res);
    });
  }

  Delete(Id: Number){
    const url = `${this.memoryUrl}/delete/${Id}`
    this.httpClient.delete(url)
    .subscribe(res => {
      console.log(res);
    });
    }
  

  Insert(memory: Memory){
    const url = `${this.memoryUrl}/post`
    return this.httpClient.post(url,memory)
    .subscribe(res => {
      console.log(res);
    });
  }

  Archive(Id: Number){
  const url = `${this.memoryUrl}/archive/${Id}`
  this.httpClient.put(url,null)
  .subscribe(res => {
    console.log(res);
  });
  }

}
