import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type Produtos = {
	id: number;
	nome: string;
	preco: number;
	quantidade: number;
};
const BancoProdutos: Produtos[] = [//0 - 1 
	{ id: 1, nome: 'Notebook', preco: 6000, quantidade: 10 },
];
const produtosSlice = createSlice({
	name: 'produtos',
	initialState: {
		produtos: BancoProdutos,
	},
	reducers: {
		cadastrar: (state, action: PayloadAction<Produtos>) => {
			state.produtos.push(action.payload);
		},
	},
});
export const {cadastrar} = produtosSlice.actions;
export default produtosSlice.reducer;