import React, { useEffect, useState } from 'react';
import { Container ,Paper} from '@material-ui/core';
import {env} from './next.config';
import DeleteTable from './deleteTable';


export default function DeleteForm() {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`${env.BACKEND_URL}task`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        setTasks(result);
        }

        fetchData();
    }, [tasks]);

    return (
        <div>
        <Container>
            <Paper
                style={{
                    padding: "50px",
                    marginTop: '20px',
                    // default height of 400px
                    height:'auto',
                    // width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '100px',

                }}
            >
                <h1 style={{color:"blue"}}>Select Task(s) to Delete</h1>
                <DeleteTable rows={tasks} setrows={setTasks} />
        
            </Paper>
        
        
        </Container>

    </div>
    );
}
    
      