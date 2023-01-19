import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

//criando uma juncao de informacoes
//funcão que contem o o nome da reduce e no reduce eu tenho estados inicial, os meus actions que mudam o estado;
const contadorSlice = createSlice({
	name: 'contador', //nome da reduce
	initialState: {
		//o estado inicial
		conta: 0,
	},
	reducers: {
		//actions
		incrementar(state) {
			state.conta += 1;
		},
		decrementar(state) {
			state.conta -= 1;
		},
		zera: (state) => {
			state.conta = 0;
		},
	},
});

//exportando as acoes e o reducer
export const {incrementar, decrementar, zera} = contadorSlice.actions;
export default contadorSlice.reducer;
