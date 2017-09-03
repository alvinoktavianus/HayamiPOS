import {MASTER_DISCOUNT_SET_CUSTOMERS} from "../../actions/master-discount/constant";

export function MasterDiscountReducers(state = [], action) {
  switch (action.type) {
    case MASTER_DISCOUNT_SET_CUSTOMERS:
      return {...state}
  }
}
