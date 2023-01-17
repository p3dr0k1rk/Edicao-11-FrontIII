import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MuiLayout from './components/MuiLayout';
import MuiTextField from './components/MuiTextField';
import HookTextField from './hooksmui/MuiTextField';
import Home from './page/Home';
import { ThemeProvider } from '@mui/material';
import { bob, sponja } from './theme/theme';

//criar um temta

function App() {
	return (
		<ThemeProvider theme={bob}>
			<CssBaseline />
			{/* <MuiLayout />
      <MuiTextField/> */}
			{/* <HookTextField /> */}
			<Home />
		</ThemeProvider>
	);
}

export default App;
