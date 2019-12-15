import * as types from "./actionTypes";

export function addFeature(feature) {
  return {
    type: types.ADD_FEATURE,
    payload: {...feature}
  };
}


export function additionalPrice(extraMoney){
    console.log(extraMoney)
    return {
        type: types.CALCULATE_TOTAL,
        payload: extraMoney
    }
}