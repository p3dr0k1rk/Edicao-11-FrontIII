import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MuiLayout from './components/MuiLayout';
import MuiTextField from './components/MuiTextField';
import HookTextField from './hooksmui/MuiTextField';

function App() {
  return (
    <div>
      {/* <CssBaseline />
      <MuiLayout />
      <MuiTextField/> */}
      <HookTextField />
    </div>
  );
}

export default App;
