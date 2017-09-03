import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {MASTER_DISCOUNT_PAGE_REQUEST} from "./constant";

@Injectable()
export class MasterDiscountsActions {

  pageRequest(): Action {
    return {
      type: MASTER_DISCOUNT_PAGE_REQUEST
    }
  }

}
