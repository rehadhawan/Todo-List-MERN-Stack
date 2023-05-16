import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import  IconButton  from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function Showtask() {
  const classes = useStyles();

  const [tasksList, settaskList] = useState([])

  const deletetask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then( () => {
      window.location.reload(false);
    })
  }

  React.useEffect(() => {
    axios.get('http://localhost:5000/tasks').then( (alltasks) => {
      settaskList(alltasks.data);
    })
  }, [])
  return (
    <>
     <h2> All Tasks </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Taskno</TableCell>
            <TableCell align="right">Taskname</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">ETC</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tasksList.map((task, key) => (
            <TableRow
              key={key}>
              <TableCell component="th" scope="row">
                {task.Taskname}
              </TableCell>
              <TableCell align="right">{task.Taskno}</TableCell>
              <TableCell align="right">{task.Subject}</TableCell>
              <TableCell align="right">{task.ETC}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={() => deletetask(task._id)}>
  <DeleteIcon fontSize="small" />
</IconButton>  
              </TableCell>
             
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </>);
}
