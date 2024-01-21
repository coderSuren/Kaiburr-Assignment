import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import {env} from './next.config';

const DeleteTable = ({ rows, setrows }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true,
    },
    {
      field: 'assignee',
      headerName: 'Assignee',
      width: 150,
      editable: true,
    },
    {
      field: 'project',
      headerName: 'Project',
      width: 150,
      editable: true,
    },
    {
      field: 'startTime',
      headerName: 'Start Time',
      width: 200,
      editable: true,
    },
    {
      field: 'surendranProperty',
      headerName: 'Surendran Property',
      width: 200,
      editable: true,
    },
  ];
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [message, setMessage] = React.useState({"message":"", "color":""});


  const deleteSelected = () => {
    

    if (rowSelectionModel.length === 0) {
      setMessage({"message":"Please select atleast one row to delete", "color":"red"})
      return;
    }

    else{
      rowSelectionModel.forEach((element) => {
        fetch(env.BACKEND_URL+"task/"+element, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
      });
      setrows([]);
      setMessage({"message":"Selected rows deleted successfully", "color":"green"})
    }

  }

  

  return (
    <Box sx={{
       width: '100%',
       height: ''
       }}>
        <Button variant="contained" color="primary" onClick={deleteSelected}>
        Delete
      </Button>
      <br/>
      <h2 style={{color:message.color}}>{message.message}</h2>
      <br/>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
        rowSelectionModel={rowSelectionModel}
      />
     </Box>
  );
}

export default DeleteTable;