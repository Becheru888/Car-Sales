import * as types from "./actionTypes";

export function addFeature(feature) {
    console.log(feature)
  return {
    type: types.ADD_FEATURE,
    payload: {...feature}
  };
}
