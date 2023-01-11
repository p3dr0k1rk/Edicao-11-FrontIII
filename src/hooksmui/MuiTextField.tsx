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
} from "@mui/material";
import React, { useState } from "react";

const HookTextField: React.FC = () => {
  //tipo
  interface Growdever {
    nome: string;
    email: string;
  }

  //estados
  const [growdevers, setGrowdevers] = useState<Growdever[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleGrowdever = () => {
    let growdever: Growdever = { nome, email }; //mont o objeto
    growdevers.push(growdever); //eu coloco o objeto dentro do vetor
    setGrowdevers(growdevers); //mudo o vetor
    console.log(growdevers);
    setNome("");
    setEmail("");
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='Growdevers'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Contatos de growdevers
                </Typography>
                <Box>
                  <TextField
                    label='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <TextField
                    label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Button onClick={handleGrowdever} variant='contained'>
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
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {growdevers.map((elemento, index)=>(
                  <TableRow key={index}>
                    <TableCell>
                      {elemento.nome}
                    </TableCell>
                    <TableCell>
                      {elemento.email}
                    </TableCell>
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
