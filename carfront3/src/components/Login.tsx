import axios from "axios";
import { useState } from "react";
import { Button, TextField, Stack, Snackbar } from "@mui/material";
import Carlist from "./Carlist";

type User = {
  username: string;
  password: string;
}

export default function Login() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User>({
    username: '',
    password: ''
  });


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleLogin = () => {
    // 템플릿 리터럴도 안 쓰고 하겠습니다.
    axios.post(import.meta.env.VITE_API_URL + '/login', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      const jwtToken = res.headers.authorization;
      if (jwtToken !== null && jwtToken !== undefined) {
        localStorage.setItem('jwt', jwtToken);
        setIsAuthenticated(true);
      }
    })
    .catch(() => setOpen(true)) // 일부러 err => console.err(err); 안씀
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('jwt', '');
  }

  if(isAuthenticated) {
    return <Carlist logout={handleLogout}/>
  }
  else {
    return (
      <>
        <Snackbar 
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message='ID 혹은 비밀번호가 틀렸습니다.'
        />
        <Stack spacing={2} alignItems="center" mt={2}>
          <TextField name="username" label="Username" onChange={handleChange}/>
          <TextField type="password" name="password" label="Password" onChange={handleChange}/>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogin}
          >LOGIN
          </Button>
        </Stack>
      </>
    )
  }
}