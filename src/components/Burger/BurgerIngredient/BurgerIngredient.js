import React, { Component, PureComponent } from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

// const burgerIngredient = (props) => {
class BurgerIngredient extends PureComponent {
  render() {
    var ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.seed1}></div>
            <div className={classes.seed2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = <div></div>;
    }
    return ingredient;
  }
}

export default BurgerIngredient;

// .Seeds1:after
// .Seeds1:before
// .Seeds2:before

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired,
};
