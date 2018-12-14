import React, {Component} from "react";
import Loader from '../helpers/loaders';
import LevelOneRender from './LevelOneRender'

class BackgroundRender extends Component {

  // drawBackground(background, context, sprites) {
  //   background.ranges.forEach(([x1, x2, y1, y2]) => {
  //       for (let x = x1; x < x2; ++x) {
  //           for (let y = y1; y < y2; ++y) {
  //               sprites.drawTile(background.tile, context, x, y);
  //             }
  //           }
  //         });
  //       };
  render(){
  return (
    <LevelOneRender name= "1"/>
  );
}
}

export default BackgroundRender;
