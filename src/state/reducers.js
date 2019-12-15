import * as types from "./actionTypes";

// Step 3



// CAR STATE ------------------------

const initialCar = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg"
};


export function car(carState = initialCar, action) {
  switch (action.type) {
    default:
      return carState;
  }
}


//FEATURES STATE -----------------------

const additionalFeatures = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

export function features(featuresState = additionalFeatures, action) {
  switch (action.type) {
    default:
      return featuresState;
  }
}


//ADDED FEATURES STATE -------------------------------

const initial = [];
export function addedFeatures(addedFeaturesState = initial, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return [...addedFeaturesState, action.payload];
    default:
      return addedFeaturesState;
  }
}


// TOTAL PRICE --------------------------------

const initial_addtitional_price = 0;
export function additionalPrice(
  additional = initial_addtitional_price,
  action
) {
  switch (action.type) {
    case types.CALCULATE_TOTAL:
      debugger
      return additional + action.payload  
    default:
      return additional;
  }
}
