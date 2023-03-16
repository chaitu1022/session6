import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  productPromiseCall(): Promise<any> {
    return this.httpClient.get("https://dummyjson.com/products/1").toPromise();
  }

  productObservableCall(): Observable<any> {
    return this.httpClient.get("https://dummyjson.com/products/1");
  }



  

}
