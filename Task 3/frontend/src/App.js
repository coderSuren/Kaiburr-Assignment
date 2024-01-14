import Appbar from './components/Appbar';
import './App.css';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import CreateForm from './components/createTask';
import DeleteForm from './components/deleteTask';
import ShowForm from './components/showTask';
import SearchForm from './components/searchTask';


function App() {
  const [alignment, setAlignment] = React.useState('create');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const renderForm = () => {
    switch (alignment) {
      case 'create':
        return <CreateForm />;
      case 'show':
        return <ShowForm />;
      case 'search':
        return <SearchForm />;
      case 'delete':
        return <DeleteForm />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Appbar />
      <br/>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="create">create</ToggleButton>
        <ToggleButton value="show">show</ToggleButton>
        <ToggleButton value="search">search</ToggleButton>
        <ToggleButton value="delete">delete</ToggleButton>
      </ToggleButtonGroup>

      {renderForm()}
    </div>
  );
}

export default App;
