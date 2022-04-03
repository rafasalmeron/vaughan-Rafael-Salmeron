import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { goToFeed, goToLogin } from "../../routes/cordinator";
import { StyledToolBar } from "./styled";
import { useNavigate } from "react-router-dom";

const Header = ({ login_logout, setLogin_logout }) => {
  const token = localStorage.getItem("tokenLabeddit");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("tokenLabeddit");
  };

  const login_logoutAction = () => {
    if (token) {
      logout();
      setLogin_logout("Login");
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolBar>
          <Button color="inherit" onClick={() => goToFeed(navigate)}>
            Labeddit
          </Button>
          <Button color="inherit" onClick={login_logoutAction}>
            {login_logout}
          </Button>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Header;
