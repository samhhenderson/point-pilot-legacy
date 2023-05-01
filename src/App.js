import React, {Component} from "react";
import { StateInspector } from "reinspect";
import MainContainer from "./containers/MainContainer.jsx";

class App extends Component {
  render() {
    return (
      <StateInspector>
        <MainContainer/>
      </StateInspector>
    )
  }
}

export default App;