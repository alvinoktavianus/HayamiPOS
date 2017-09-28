import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {COUNTERS, CUSTOMERS, MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../constant/api";
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  items: any;

  constructor(public http: Http) {

  }
  fetchData() {
    this.http
      .get(PRODUCTS, {
        headers: REQUEST_HEADERS()
      })
      .map(res => res.json())
      .subscribe(
        data => {
          this.items = data;
        }
      );
  }

  filterProduct(searchVar,searchTerm){
    this.fetchData();
    if(this.items !=null) {
      return this.items.filter((item) => {
        switch (searchVar) {
          case "Product Code":
            return item.ProductCode.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          case "Product Description":
            return item.ProductDesc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        }
      });
    }
  }

}
