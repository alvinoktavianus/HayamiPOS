import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {COUNTERS, CUSTOMERS, MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../constant/api";
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  products: any;
  types: any = [];
  objType: any = {};
  filteredProducts: any = [];
  constructor(public http: Http) {
    this.fetchDataProduct();
  }

  fetchDataProduct() {
    this.http
      .get(PRODUCTS, {
        headers: REQUEST_HEADERS()
      })
      .map(res => res.json())
      .subscribe(
        data => {
          this.products = data;
        }
      );
    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(type => {
            // console.log(type);
            this.types[type.TypeID] = type;
          });
        }
      );
  }

  filterProduct(searchVar,searchTerm){
    if(this.products !=null) {
      switch(searchVar){
        case "Product Code":
        case "Product Description":
        return this.products.filter((item) => {
          switch (searchVar) {
            case "Product Code":
              return item.ProductCode.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            case "Product Description":
              return item.ProductDesc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          }
        });
        case "Product Type":
          this.filteredProducts = [];
          if(this.types !=null){
            var types= this.types;
            this.objType = types.filter((itemType)=>{
              return itemType.TypeName.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1;
            });
            for(let i=0;i<this.objType.length;i++){
              var products = this.products;
              products.filter((item)=> {
                return item.TypeID == this.objType[i].TypeID;
              })
              if(products.length != 0){
                for(let j=0;j<products.length;j++) {
                  this.filteredProducts.push(products[i]);
                }
              }
            }
            return this.filteredProducts;
          }

      }
    }
  }

}
