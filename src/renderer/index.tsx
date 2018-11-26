import * as React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './app/App';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    );
  }
}

render(<Index />, document.getElementById('app'));
