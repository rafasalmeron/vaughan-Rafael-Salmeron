import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { goToFeed, goToLogin } from '../../routes/cordinator'
import {StyledToolBar} from './styled'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolBar>          
          <Button color="inherit"
          onClick={() => goToFeed(navigate)}
          >Labeddit</Button>
          <Button color="inherit"
          onClick={() => goToLogin(navigate)}
          >Login</Button>
        </StyledToolBar>
      </AppBar>
    </Box>
  )
}

export default Header