import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import Navbar from '../components/NavBar';
import HookTextField from '../hooksmui/MuiTextField';

const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Box>
				<HookTextField />
			</Box>
		</React.Fragment>
	);
};

export default Home;
