import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeComponent = (props) => {
    // console.log(props);
  return (
    <div>
      <h1>number of cakes {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
