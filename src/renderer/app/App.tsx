import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = createStyles({
  green: {
    backgroundColor: 'green',
  },
});

interface AppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<AppProps> {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.green}>
        <p>hi</p>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
