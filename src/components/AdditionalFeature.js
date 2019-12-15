import React from "react";

const AdditionalFeature = props => {
  const handleAddingFeature = () => {
    props.add(props.feature);
    props.incresePrice(props.feature.price);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddingFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
