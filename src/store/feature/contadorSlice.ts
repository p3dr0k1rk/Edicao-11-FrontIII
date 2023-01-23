import { createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
	name: 'contador', 
	initialState: {
		conta: 0,
	},
	reducers: {
		incrementar(state, action) {
			state.conta += action.payload;
		},
		decrementar(state) {
			state.conta -= 1;
		},
		zera: (state) => {
			state.conta = 0;
		},
	},
});
export const {incrementar, decrementar, zera} = contadorSlice.actions;
export default contadorSlice.reducer;
