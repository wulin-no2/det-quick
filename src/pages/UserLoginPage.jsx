import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  Box,
  FormControl,
  OutlinedInput,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
// import { requestLogin } from '../service/authAPiService'
import { requestLogin } from "../api/Profile/userApiService";
import globalSettingsConfig from "../globalSettingsConfig";
// import { loginApi } from "../api/Profile/login";
// import { pubSub } from '../utils/pubSub';
const UserLoginPage = () => {
  const theme = useTheme();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
    console.log(
      "response.data.accessToken===read from local=",
      localStorage.getItem(globalSettingsConfig.localStorageKeys.ACCESS_TOKEN)
    );
    console.log(
      "response.data.refreshToken===read from local=",
      localStorage.getItem(globalSettingsConfig.localStorageKeys.REFRESH_TOKEN)
    );
  };

  const handleForgotPasswordClick = () => {
 
    navigate(`/`);
    // navigate(`/game-detail?gameName=${encodeURIComponent(gameName)}&gameId=${gameId}`);
  };

  const handleLogin = async () => {
    // Perform login logic here
    // navigate('/dashboard');
    console.log("account===xxxxx=", account);
    try {
      // pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

      const response = await requestLogin(account, password);

      // if (response.)
      console.log("response====", response);
      if (response.success) {
        if (response.data) {
          // Check if response.data.accessToken is not null or undefined
          if (response.data.accessToken) {
            const userAccessToken = response.data.accessToken;
            localStorage.setItem(
              globalSettingsConfig.localStorageKeys.ACCESS_TOKEN,
              userAccessToken
            );
          }

          // Check if response.data.refreshToken is not null or undefined
          if (response.data.refreshToken) {
            const userRefreshToken = response.data.refreshToken;
            localStorage.setItem(
              globalSettingsConfig.localStorageKeys.REFRESH_TOKEN,
              userRefreshToken
            );
          }
        }
        navigate("/");
      } else {
        // pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      // pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);
    }
  };

  const isLoginDisabled = !account || !password; // Check if username or password is empty

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
          borderRadius="10px"
          style={{ backgroundColor: "#ffffff", padding: " 4rem 4rem 0 4rem" }}
        >
          <Typography variant="h4" align="center" color="#083156">
            Log in to your account
          </Typography>

          <FormControl variant="outlined" style={{ marginTop: "40px" }}>
            <TextField
              label="Email"
              value={account}
              onChange={handleAccountChange}
            />
          </FormControl>

          <FormControl variant="outlined" style={{ marginTop: "25px" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPasswordClick}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Typography
            variant="subtitle1"
            align="left"
            style={{
              marginTop: "18px",
              marginBottom: "18px",
              fontSize: "16px",
            }} // Adjust these values to fine-tune the spacing
          >
            <Link
              to="/verify"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </Link>
          </Typography>
          <Button
            variant="contained"
            type="submit"
            onClick={handleLogin}
            style={{ height: "55px", borderRadius: "6px" }}
            disabled={isLoginDisabled} // Disable the button if username or password is empty
          >
            Login
          </Button>

          <Typography
            variant="subtitle1"
            align="center"
            color="#083156"
            style={{ marginTop: "25px", fontSize: "18px" }} // Adjust these values to fine-tune the spacing
          >
            Don&apos;t have an account?
            <Link
              to="/register"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                marginLeft: "10px",
              }}
            >
              Sign Up
            </Link>
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="#777777"
            style={{
              marginTop: "50px",
              marginBottom: "15px",
              fontSize: "14px",
            }} // Adjust these values to fine-tune the spacing
          >
            <Link to="/" style={{ color: "#777777", textDecoration: "none" }}>
              Terms of Use
            </Link>
            <span style={{ margin: "0 15px" }}> | </span>
            <Link to="/" style={{ color: "#777777", textDecoration: "none" }}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default UserLoginPage;
