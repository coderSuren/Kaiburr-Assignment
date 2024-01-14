import React, {  useState } from 'react';
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

export default function DeleteForm() {

    const [message, setMessage] = useState({message:'', color:''});
    const [id, setId] = useState('');
    const classes = useStyles();
    
    const handleClick=(e)=>{
        e.preventDefault()
        if(id){
            fetch(env.BACKEND_URL+"task/"+id,{
                method:"DELETE",
                headers:{"Content-Type":"application/json"},
            }
            ).then(async (res)=>{
                if(res.status===200){
                    setMessage({color:"green",message:"Task with id: "+id+ " deleted successfully!"})
                }
                else{
                    setMessage({color:"red",message:"Task with id: "+id+ " not found"});
                }
            })

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
            <h1 style={{color:"blue"}}>Delete Exisiting Task</h1>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="ID" 
                    variant="outlined" 
                    fullWidth 
                    style={{width: '60%'}}
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                <br/>
                <Button variant="contained" color="primary"  onClick={handleClick}>
                    Submit
                </Button>
            </form>
            <h2 style={{color:message.color}}>{message.message}</h2>
        </Paper>

        {/* {tasks && <Table tasks={tasks} />} */}

        </Container>
    </div>
    );
}
    
      