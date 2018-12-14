import React, {Component} from "react";
import Loader from '../helpers/loaders';

const LevelOneRender = (props) => {

  if(!props.name){
    return null;
  }
    const levelOne = new Loader(props.name);
    console.log(levelOne);

    return null;
  }

export default LevelOneRender;
