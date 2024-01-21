import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import {env} from './next.config';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function SearchForm() {

    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState({message:"",color:""})
    const [alignment, setAlignment] = React.useState('id');

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setMessage({message:"",color:""});
            setRows([]);
            setName("");
            setAlignment(newAlignment);
        }
    };

    const handleClick=(e)=>{
        e.preventDefault()
        setRows([]);
        setMessage({message:"",color:""});
        if(name){
            if (alignment==="assignee"){
                fetch(env.BACKEND_URL+"findByAssignee/"+name,{
                    method:"GET",
                    headers:{"Content-Type":"application/json"},
                }
                ).then(async (res)=>{
                    if(res.status===200){
                        const result = await res.json();
                        setRows(result);
                    }
                    else{
                        setMessage({color:"red",message:"Task with Assignee name: "+name+ " not found"});
                    }
                })
            }
            else if (alignment==="name") {
                fetch(env.BACKEND_URL+"findByName/"+name,{
                    method:"GET",
                    headers:{"Content-Type":"application/json"},
                }
                ).then(async (res)=>{
                    if(res.status===200){   
                        const result = await res.json();
                        setRows(result);
                    }
                    else{
                        setMessage({color:"red",message:"Tasks with name containing: "+name+ " not found"});
                    }
                })
            }
            else if(alignment==="id"){
                fetch(env.BACKEND_URL+"task/"+name,{
                    method:"GET",
                    headers:{"Content-Type":"application/json"},
                }
                ).then(async (res)=>{
                    if(res.status===200){
                        const result = await res.json();
                        setRows([result]);
                    }
                    else{
                        setMessage({color:"red",message:"Task with id: "+name+ " not found"});
                    }
                })
            }
            
        }
        else{
            setMessage({color:"red",message:"Please enter all the fields"})
        }
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
            <h1 style={{color:"blue"}}>Search Exisiting Tasks</h1>
                
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >   
                <ToggleButton value="id">By Id</ToggleButton>
                <ToggleButton value="name">By Name</ToggleButton>
                <ToggleButton value="assignee">By Assignee</ToggleButton>
            </ToggleButtonGroup>


            <form className={classes.root} noValidate autoComplete="off">
            {alignment === 'name' ? (
                <>
                <TextField 
                    id="outlined-basic" 
                    label="Task name" 
                    variant="outlined" 
                    fullWidth 
                    style={{width: '60%'}}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                <br/>
                <Button variant="contained" color="primary"  onClick={handleClick}>
                    Submit
                </Button>
                </>
            ): alignment === 'assignee' ? (
                <>
                <TextField 
                id="outlined-basic" 
                label="Assignee Name" 
                variant="outlined" 
                fullWidth 
                style={{width: '60%'}}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                <br/>
                <Button variant="contained" color="primary"  onClick={handleClick}>
                    Submit
                </Button>
                </>
            ): alignment === 'id' ? (
                <>
                <TextField 
                id="outlined-basic" 
                label="Task Id" 
                variant="outlined" 
                fullWidth 
                style={{width: '60%'}}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                <br/>
                <Button variant="contained" color="primary"  onClick={handleClick}>
                    Submit
                </Button>
                </>
            ): null
            }
            </form>
            <h2 style={{color:message.color}}>{message.message}</h2>
        </Paper>

        {rows.length>0 && <Table rows={rows} />}

        </Container>
    </div>
    );
}
    
      