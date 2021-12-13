import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Restaurant} from "./restaurant.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
 private restaurants: Restaurant[] = new Array<Restaurant>();

  constructor(private dataSource: RestDataSource) {
  }
  saveRestaurant(restaurant: Restaurant) {
    if (restaurant.id == 0 || restaurant.id == null) {
      this.dataSource.saveRestaurant(restaurant)
        .subscribe(p => this.restaurants.push(p));
    }
  }
}
