import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';



const AdditionalFeatures = ({features}) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

function mapStateToProps(state){
  return {
    features : state.features
  }
}

export default connect(
  mapStateToProps
)(AdditionalFeatures);
