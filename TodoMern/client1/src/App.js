import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Task from './components/showStudent/showStudent.js';
import Create from './components/createTask/createtask.js';
import './App.css';
import useStyles from './styles';

function App() {
 const classes = useStyles();
  return (
    <div className="App">
     <Container maxWidth="lg"> 
     <AppBar className = {classes.AppBar}   position = "static" colout = "inherit">
      <Typography className = {classes.heading} varient ="h2" align="center"> All Tasks </Typography>

     </AppBar>
    
     <Grow in>
       <Container>
      <Grid container justify="space-between" alignItems="strect">
        <Grid item xs={12} sm={7}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Task />
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <AppBar className={classes.appBar} position="static" color="inherit">
             <Create />
          </AppBar>
      </Grid>

       </Container>
     </Grow>
     </Container>
    </div>
  );
}

export default App;
