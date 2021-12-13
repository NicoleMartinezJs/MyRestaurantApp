import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, Observable, throwError } from "rxjs";

import { catchError } from "rxjs/operators";
import { Restaurant } from "./restaurant.model";


export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(private http: HttpClient,
    @Inject(REST_URL) private url: string) { }

  saveRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.sendRequest<Restaurant>("POST", this.url, restaurant);
  }

  private sendRequest<T>(verb: string, url: string, body?: Restaurant): Observable<T> {
    return this.http.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        "Access-Key": "<secret>",
        "Application-Name": "ejAngularUni"
      })
    }).pipe(catchError((error: Response) =>
      throwError(`Network Error: ${error.statusText} (${error.status})`)));
  }
}
