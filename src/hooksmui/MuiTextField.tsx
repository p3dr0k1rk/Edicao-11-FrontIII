import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from '@mui/material';
import { setegid } from 'process';
import React, { useEffect, useState } from 'react';
import Growdever from '../types/growdevers';

const HookTextField: React.FC = () => {
	//estados
	const [growdevers, setGrowdevers] = useState<Growdever[]>([]);
	//      variavel, funcao que muda o estado
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');

	//localstorage
	const salvar = (parametroGrowdevers: Growdever[]) => {
		localStorage.setItem('growdevers', JSON.stringify(parametroGrowdevers));
	};

	const recupera = () => {
		const grow = localStorage.getItem('growdevers');
		//[{}] senao []
		return grow !== null ? JSON.parse(grow) : [];
	};

	//nao esta fazendo nada
	const handleGrowdevers = () => {
		//pa mudar o estado do grodevers
		setGrowdevers(recupera);
	};

	//hook ele é o primeiro a ser executado
	useEffect(() => {
		handleGrowdevers();
	}, []);

	const handleGrowdever = () => {
		if (nome != '' && email != '' && telefone != '') {
			const growdever: Growdever = { nome, email, telefone }; //monta o objeto
			//growdevers = Growdever []; inserir
			growdevers.push(growdever); //eu coloco o objeto dentro do vetor [{nome, email}]
			setGrowdevers(growdevers); //mudo o estado do vetor
			salvar(growdevers); //pego o vetor e salvo no localstorage

			setNome('');
			setEmail('');
			setTelefone('');
		} else {
			alert('Preencha os dados');
		}
	};

	return (
		<>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Box>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="140"
								image="/static/images/cards/contemplative-reptile.jpg"
								alt="Growdevers"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Contatos de growdevers
								</Typography>
								<Box>
									{/**input */}
									<TextField
										label="Nome"
										value={nome}
										onChange={(e) => setNome(e.target.value)}
									/>
									<TextField
										label="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										type="email"
									/>
									<TextField
										label="Telefone"
										value={telefone}
										onChange={(e) => setTelefone(e.target.value)}
										type="tel"
									/>
								</Box>
							</CardContent>
							<CardActions>
								<Button onClick={handleGrowdever} variant="contained">
									Salvar
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Nome</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>Telefone</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{growdevers.map((elemento, index) => (
									<TableRow key={index}>
										<TableCell>{elemento.nome}</TableCell>
										<TableCell>{elemento.email}</TableCell>
										<TableCell>{elemento.telefone}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</>
	);
};

export default HookTextField;
