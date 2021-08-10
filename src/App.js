
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">option 2</MenuItem>
          <MenuItem value="worldwide">option 3</MenuItem>
          <MenuItem value="worldwide">option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
