import {ENV} from "./environment";
import {Headers} from "@angular/http";

export const LOGIN = `${ENV.API_HOST}/api/users/login`;

export const PRODUCTS = `${ENV.API_HOST}/api/products`;

export const CUSTOMERS = `${ENV.API_HOST}/api/customers`;
export const NEW_CUSTOMERS = `${ENV.API_HOST}/api/customers/new`;

export const COUNTERS = `${ENV.API_HOST}/api/counters`;
export const NEW_COUNTERS = `${ENV.API_HOST}/api/counters/new`;

export const MODELS = `${ENV.API_HOST}/api/models`;

export const TYPES = `${ENV.API_HOST}/api/types`;
export const NEW_TYPES = `${ENV.API_HOST}/api/types/new`;

export function REQUEST_HEADERS() {
  let headers = new Headers();
  headers.append('TOKEN', localStorage.getItem('TOKEN'));
  return headers;
}
