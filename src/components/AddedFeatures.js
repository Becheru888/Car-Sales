import React from 'react';
import {connect} from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = ({addedFeatures}) => {
  console.log(addedFeatures)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {addedFeatures.length ? (
        <ol type="1">
          {addedFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state){
  return {
    addedFeatures: state.addedFeatures
  }
}

export default connect(mapStateToProps)(AddedFeatures);
