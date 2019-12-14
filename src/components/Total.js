import React from "react";
import { connect } from "react-redux";

const Total = ({ additPrice, carPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${carPrice + additPrice}</h4>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    additPrice: state.aditPrc,
    carPrice: state.car.price
  };
}

export default connect(mapStateToProps)(Total);
