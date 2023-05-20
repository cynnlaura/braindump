
import { Button, Checkbox, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react';

function Morning () {
  
  const [tasks, setTasks] = React.useState([])

  const headerFont =  {
    fontFamily: 'newyork',
    fontSize: '25px'
  }

  const taskButtonStyle = {
    display: 'flex',
    width: '30%',
    fontFamily: 'newyork',
    fontSize: '15px',
    color: 'black',
    borderColor: 'black'
  }

  function Tasks () {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-evenly' }} >
        <Typography style={headerFont}>What do I want to get done today?</Typography>
        {tasks}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'space-between' }}>
          <Button onClick={addTask} style={taskButtonStyle} variant='outlined'>Add more tasks</Button>
          <Tooltip title='Reorder or delete tasks'>
            <Button onClick={editTasks} style={taskButtonStyle} variant='outlined' >Edit tasks</Button>
          </Tooltip>
        </div>
      </div>  
    )
  }
  function Task () {
    return (
      <>
        <div style={{ display: 'flex' }}>
        <Checkbox />
        <TextField
          id="outlined-multiline-flexible"
          label="Task to complete"
          multiline
          maxRows={4}
        />
      </div>
      <br />
      </>
    )
  }
  function addTask () {
    setTasks(... tasks, {Task});
    return (
      Tasks()
    )
  }
  function editTasks () {
    console.log('hi')
    for (let i = 0; i < tasks.length; i++) {
      return (
        <div> 
          hey
        </div>
        
      )

    }
    
  }
  function Frustrations () {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Typography style={headerFont}>What frustrated me today?</Typography>
          <TextField
            id="outlined-multiline-flexible"
            //label="Task to complete"
            multiline
            maxRows={4}
          />
          <Typography style={headerFont}>What is out of my control?</Typography>
          <TextField
            id="outlined-multiline-flexible"
            //label="Task to complete"
            multiline
            maxRows={4}
          />
          <Typography style={headerFont}>What can I do?</Typography>
          <TextField
            id="outlined-multiline-flexible"
            //label="Task to complete"
            multiline
            maxRows={4}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: '100vh', width: '100vw', background: 'linear-gradient(#e66465, #f2c4c4)' }}>
        <Tasks />
        <div />
        <Frustrations />
      </div>
    </>
    
  )
}

export default Morning;