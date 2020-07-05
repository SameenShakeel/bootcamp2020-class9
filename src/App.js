import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider, TextField, Button } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50
  },
  paper: {
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    padding: 15
  },

  input: {
    width: '95%',
    marginBottom: 10,
    paddingBottom: 5
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <h1>Login</h1>
        <Divider variant="middle" />
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="secondary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
