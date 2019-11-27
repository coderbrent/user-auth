import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { MdEmail, MdSecurity } from "react-icons/md";
import FormGroup from '@material-ui/core/FormGroup'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container>
      <FormGroup>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="email-input">
            E-Mail Address
          </InputLabel>
          <Input
            id="email-input"
            startAdornment={
              <InputAdornment position="start">
                <MdEmail fill={'grey'} />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="password-input">
            Password
          </InputLabel>
          <Input
            type="password"
            id="password-input"
            startAdornment={
              <InputAdornment position="start">
                <MdSecurity fill={'grey'} />
              </InputAdornment>
            }
          />
        </FormControl>
      </FormGroup>
    </Container>
  )
}

export default Login;