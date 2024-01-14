import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const Table = ({ rows }) => {
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
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Table;