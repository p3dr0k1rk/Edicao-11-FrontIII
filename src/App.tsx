import React, { useState } from 'react';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { incrementar, decrementar } from './store/feature/contadorSlice';
import Produto from './page/Produto';
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
			<Produto/>
		</>
	);
}
export default App;
