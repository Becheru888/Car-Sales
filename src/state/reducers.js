import * as types from "./actionTypes";

// Step 3

const initialCar = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
};

export function car(carState = initialCar, action){
    switch (action.type){
        default:
            return carState
    }
}

const carExistentFeatures = []


const initial_addtitional_price = 0;
export function additionalPrice(
  additional = initial_addtitional_price,
  action
) {
  switch (action.type) {
    default:
      return additional;
  }
}
