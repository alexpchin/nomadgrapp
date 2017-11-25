import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Ionicons name="ios-search" size={30} color={"black"} />;
      } else {
        return <Ionicons name="ios-search-outline" size={30} color={"black"} />;
      }
    }
  };
  render() {
    return <SearchScreen />;
  }
}

export default Container;