import { configureStore } from '@reduxjs/toolkit';
import contadorSlice from './feature/contadorSlice';
const store = configureStore({
	reducer: {
		contadorReducer: contadorSlice,
	},
});
//TYPESCRIPT
//exportando o estado inicial
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

