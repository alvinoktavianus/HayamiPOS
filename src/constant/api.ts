import {ENV} from "./environment";
import {Headers} from "@angular/http";

export const LOGIN = `${ENV.API_HOST}/api/users/login`;

export const PRODUCTS = `${ENV.API_HOST}/api/products`;

export const CUSTOMERS = `${ENV.API_HOST}/api/customers`;

export function REQUEST_HEADERS() {
  let headers = new Headers();
  headers.append('TOKEN', localStorage.getItem('TOKEN'));
  return headers;
}
