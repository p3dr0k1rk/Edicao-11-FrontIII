import React from 'react';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { incrementar, decrementar } from './store/feature/contadorSlice';
function App() {
	//a partir dele, tu vai disparar as actions
	const dispatch = useDispatch();
	//pegar o estado inicial
	const initialState = useSelector((state: RootState) => state.contadorReducer);
	return (
		<>
			<h1>{initialState.conta}</h1>
			<button onClick={()=>dispatch(incrementar())}>incrementar</button>
			<button onClick={()=>dispatch(decrementar())}>decrementar</button>
		</>
	);
}
export default App;
