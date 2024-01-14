import React, { useEffect, useState } from 'react';
import { Container ,Paper} from '@material-ui/core';
import {env} from './next.config';
import Table from './Table';


export default function ShowForm() {

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
    }, []);

    return (
        <div>
        <Container>
            <Paper
                style={{
                    padding: "50px",
                    marginTop: '20px',
                }}
            >
                <h1 style={{color:"blue"}}>All Tasks</h1>
                <Table rows={tasks} />
        
            </Paper>
        
        
        </Container>

    </div>
    );
}
    
      