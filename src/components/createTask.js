import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import {env} from './next.config';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },

    },
}));

export default function CreateForm() {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [project, setProject] = useState('');
    const [assignee, setAssignee] = useState('');
    const [startTime, setStartTime] = useState('');
    const [message, setMessage] = useState({color:"red",message:""});
    const classes = useStyles();
    const handleClick=(e)=>{
        e.preventDefault()
        if(name && id && project && assignee && startTime){
            const task={name,id,project,assignee,startTime}
            const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
            if (!dateRegex.test(startTime)) {
                setMessage({color:"red",message:"Please enter startTime in the format yyyy-MM-d'T'HH:mm:ss.SSSZ"})
                return;
            }
            fetch(env.BACKEND_URL+"task",{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(task)
            }
            // check the response from the server and print the message accordingly

            ).then(async (res)=>{
                if(res.status===201){
                    setMessage({color:"green",message:"Task with id: "+id+ " added successfully!"})
                }
                else{
                    const resp= await res.json();
                    console.log(resp);
                    return;
                }
            })

        }  
        else{
        setMessage({color:"red",message:"Please enter all the fields"})
        }
    }


    const getTime=()=>{
        var dt = new Date();
        dt= dt.toISOString();
        setStartTime(dt);

    }

    return (
        <div>
        <Container>
            <Paper 
                style={{
                    marginTop: '20px',
                    padding: "50px",
                }}    
            >
            <h1 style={{color:"blue"}}>Add new Task</h1>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    fullWidth  
                    style={{width: '60%'}}  
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="ID" 
                    variant="outlined" 
                    fullWidth 
                    style={{width: '60%'}}
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Project" 
                    variant="outlined" 
                    fullWidth style={{width: '60%'}}
                    value={project}
                    onChange={(e)=>setProject(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Assignee" 
                    variant="outlined" 
                    fullWidth style={{width: '60%'}}
                    value={assignee}
                    onChange={(e)=>setAssignee(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Start Time" 
                    variant="outlined" 
                    fullWidth 
                    style={{width: '40%'}}
                    value={startTime}
                    onChange={(e)=>setStartTime(e.target.value)}
                />
                <Button variant="contained" color="primary"style={{width: '19%'}} onClick={getTime}>
                    Get Current Time
                </Button>
                <br/>
                <Button variant="contained" color="primary"  onClick={handleClick}>
                    Submit
                </Button>
            </form>
            <h2 style={{color:message.color}}>{message.message}</h2>
        </Paper>
        </Container>
    </div>
    );
}
    
      