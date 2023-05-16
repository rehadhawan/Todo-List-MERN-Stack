import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Button from '@material-ui/core/Button'


const useStyles =  makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Create() {
    const classes =  useStyles();

    const [task, settask] = useState({
        Taskno: 0,
        Taskname: '',
        Subject: '',
        ETC: ''
    });

    const createtask = () => {
        axios.post('http://localhost:5000/tasks', task).then( () => {
            window.location.reload(false);
        })

    }
  return (
    <>
    <h2>Create Task</h2>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Taskno" variant="outlined" value={task.Taskno} onChange={(event) => {
            settask({ ...task, Taskno: event.target.value})
        }} /> 
        <TextField id="outlined-basic" label="Taskname" variant="outlined" value={task.Taskname} onChange={(event)=> {
            settask({ ...task, Taskname: event.target.value})
        }} /> 
        <TextField id="outlined-basic" label="Subject" variant="outlined" value={task.Subject} onChange={(event)=> {
            settask({ ...task, Subject: event.target.value})
        }} /> 
        <TextField id="outlined-basic" label="ETC" variant="outlined" value={task.ETC} onChange={(event)=> {
            settask({ ...task, ETC: event.target.value})
        }}  />  
        <Button variant="contained" color= 'primary' onClick={createtask}>Create Task</Button>

    </form>
    </>
  );
}

