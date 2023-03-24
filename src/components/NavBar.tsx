import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { deleteSession } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate()
  
  const logout = () => {
    deleteSession()
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '50px' }}>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: "flex-end"}}>
          <Button onClick={logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
