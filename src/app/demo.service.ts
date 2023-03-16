import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, interval, Observable, takeUntil, throwError, timer } from "rxjs";
import { Product } from "./product";

@Injectable()
export class DemoService {

  private setEvent: BehaviorSubject<string> = new BehaviorSubject<string>('');

  color: string = '';

  constructor(private httpClient: HttpClient) {
    console.log("demo service instance created");
  }

  onColorChange(value: string) {
    this.color = value;
  }



  getTimer(): Observable<any> {
    const currentDate = new Date();
    const startOfNextMinute = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds() + 10
    );

    // This could be any observable stream
    const source = interval(1000);
    return source.pipe(takeUntil(timer(startOfNextMinute)));
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return throwError({message: error.message, statusCode: error.status})
  // }


  setValueToEvent(name: string) {
    this.setEvent.next(name);
  }

  getEventTrigger(): BehaviorSubject<string> {
    return this.setEvent;
  }
}
