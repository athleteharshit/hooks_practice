import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const CakeComponent = (props) => {
    // console.log(props);
  return (
    <div>
      <h1>number of iceCream {props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>buy iceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
