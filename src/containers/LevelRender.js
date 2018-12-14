import React, {Component} from "react";
import BackgroundRender from '../components/BackgroundRender'

class LevelRender extends Component {
    constructor(props){
      super(props);
      this.state = null;
      this.setContext = this.setContext.bind(this);
    }

    setContext(r) {
    console.log(r);
    this.context = r.getContext("2d");
    }

    componentDidMount(){
      this.context.fillRect(100,100, 640, 480);
    }

    render(){
      return(
        <>
            <canvas id="screen" ref={this.setContext} width="640" height="480"></canvas>
            <BackgroundRender />
        </>
      );
    }
}

export default LevelRender;
