import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Demo2Service {

    constructor(private http: HttpClient) {
        console.log("Demo2 Service Instance Created");
    }

    getLog(message: string) {
        console.log("logged message", message);
    }
}