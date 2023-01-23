<<<<<<< HEAD
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MuiLayout from './components/MuiLayout';
import MuiTextField from './components/MuiTextField';
import HookTextField from './hooksmui/MuiTextField';
import Home from './page/Home';
import { ThemeProvider } from '@mui/material';
import {bob, sponja} from './theme/theme';

//criar um tema


=======
import React, { useState } from 'react';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { incrementar, decrementar } from './store/feature/contadorSlice';
>>>>>>> 7cd5aa5068fedf4c3db041e6fe185fd8cce3ea22
function App() {
	const [valor, setValor] = useState(0);
	const dispatch = useDispatch();
	const initialState = useSelector((state: RootState) => state.contadorReducer);
	return (
		<>
			<input
				type="text"
				value={valor}
				onChange={(e) => setValor(Number(e.target.value))}
			/>
			<h1>{initialState.conta}</h1>
			<button onClick={() => dispatch(incrementar(valor))}>incrementar</button>
			<button onClick={() => dispatch(decrementar())}>decrementar</button>
		</>
	);
}
export default App;
