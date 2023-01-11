import {
  MenuItem,
  Select,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const MuiTextField: React.FC = () => {
  return (
    <>
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        color='success'
        required
      />
      <TextField
        id='filled-basic'
        label='Filled'
        variant='filled'
        multiline
        rows={4}
      />
      <TextField
        id='standard-basic'
        label='Standard'
        variant='standard'
        type='password'
      />
      <Box width='250px'>
        <TextField label='Estado' fullWidth select>
          <MenuItem value='CE'>Ceará</MenuItem>
          <MenuItem value='RS'>Rio Grande do SUL</MenuItem>
          <MenuItem value='FDB'>Fenda do Biquini</MenuItem>
        </TextField>
      </Box>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Label'
          />
        </FormGroup>
        <RadioGroup name="senioridade"  defaultValue="0-1">
          <FormControlLabel  control={<Radio />} label="0-1" value="0-1"/>
          <FormControlLabel  control={<Radio />} label="2-5" value="2-5"/>
          <FormControlLabel  control={<Radio />} label="5-8" value="5-8"/>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MuiTextField;
