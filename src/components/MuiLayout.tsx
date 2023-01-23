import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const MuiLayout: React.FC = () => {
	return (
		//componente de div
		<>
			<Box>
				<Typography variant="body1" color="initial">
					Olá estou em uma div
				</Typography>
			</Box>
			<Box component="span">SPAN</Box>
			<Box
				sx={{
					color: 'red',
					height: '100px',
					width: '100px',
					backgroundColor: 'primary.main',
				}}
			>
				Por padrão é div e você pode mudar esse comportamento
			</Box>
			<Stack justifyContent="center" direction="row">
				<Box>DIV 1</Box>
				<Box>DIV 2</Box>
			</Stack>
			<Divider sx={{ margin: 2 }} />
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Box bgcolor="primary.main">AZUL</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor="primary.dark">DARK</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MuiLayout;
