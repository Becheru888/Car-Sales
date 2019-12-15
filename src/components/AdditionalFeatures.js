import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addFeature, additionalPrice } from "../state/actionCreators";

const AdditionalFeatures = ({ features, addFeature, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              add={addFeature}
              incresePrice={additionalPrice}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    features: state.features
  };
}

export default connect(mapStateToProps, { addFeature, additionalPrice })(
  AdditionalFeatures
);
