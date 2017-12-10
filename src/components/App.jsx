import React, {
  Component
} from 'react';
import AppHeader from './Header';
import Main from './Main';
import '../style/App.css';

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      AppHeader / >
      <
      Main / >
      <
      /div>
    );
  }
}

export default App;
