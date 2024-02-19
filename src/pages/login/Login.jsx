import { useState } from 'react';
// import {useDispatch, useSelector} from "react-redux";
import classes from './login.module.scss'
// import {decrement, increment} from "../../store/slices/countSlice.js";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Divider from '@mui/material/Divider';

const Login = ({setUser}) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('admin')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')



  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value.trim())
    setPasswordError('');
  }

  const handleBlurPassword = () => {
    const passwordValid = password.length >= 6;
    setPasswordError(passwordValid ? '' : 'Enter password');
  }

  const handleSubmit = async () => {
    if (password) {   
    navigate('/home');
      localStorage.setItem('login', login)
      localStorage.setItem('password', password)
      setUser({
        login: localStorage.getItem('login'),
        password: localStorage.getItem('password')
      })
    } else {
      handleBlurPassword();
    }

  }

    return (
        <div className={classes.login}>
             <div className={classes.header}>
                 </div>
      <form className={classes.eForm}>
        
        <div className={classes.groupForm}>
        <h2 className={classes.textForm}>е-Ветеран</h2>
        
        <Divider className={classes.divider} />
        <br />
          <TextField
            id="outlined-basic"
            label="Логін"
            variant="outlined"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="form-control" name="login"
            // helperText={loginError}
            // error={!!loginError}
          />
        </div>
        <div className={classes.groupForm}>
          <TextField
            id="outlined-password-input"
            type="password"
            label="Пароль"
            variant="outlined"
            value={password}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            className="form-control" name="password"
            helperText={passwordError}
            error={passwordError}
          />
        </div>
        <Button className={classes.buttonLogin}
          variant="contained"
          // disabled={passwordError}
          onClick={handleSubmit}>Увійти
        </Button>

      </form>
        </div>
    );
};

export default Login;