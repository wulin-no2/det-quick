

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
import { useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
// import { requestLogin } from '../service/authAPiService'
import globalSettingsConfig from '../globalSettingsConfig';
import { requestRegister, requestLogout, requestUpdateNewToken } from "../api/Profile/userApiService";
import { pubSub } from '../utils/pubSub';
const UserRegistrationPage = () => {
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

  const handleShowPasswordClick = async () => {
    setShowPassword(!showPassword);

  };

  const handleRegister = async () => {
    // Perform login logic here
    // navigate('/dashboard');
    console.log("account===xxxxx=", account);
    try {
      pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

      const response = await requestRegister(account, password);

      // if (response.)
      console.log("response====", response);
      if (response.success) {


        navigate(`/verify?account=${encodeURIComponent(account)}`);

      } else {
        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
      }
    } catch (error) {
      if (error.response) {
        // 访问具体的错误信息和数据
        console.log("Error response data:", error.response.data);
        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.response.data.message);
      } else {
        // 处理无响应体的其他错误（网络问题等）
        pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, error.message || "An unknown error occurred");
      }
    } finally {
      pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);
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
        sx={{
          marginBottom:'60px'
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
          borderRadius="10px"
          style={{ backgroundColor: "#ffffff", padding: " 4rem 4rem 0 4rem" }}
        >
          <Typography variant="h4" align="center" color="#083156">
            {/* Create an account */}
            Sign up for an account
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

          {/* <FormControl variant="outlined" style={{ marginTop: "25px" }}>
            <TextField
              label="Invitation Code (Optional)"
              value={account}
              onChange={handleAccountChange}
            />
          </FormControl> */}


          <Button
            variant="contained"
            type="submit"
            onClick={handleRegister}
            style={{ height: "55px", borderRadius: "6px", marginTop: "40px" }} // Adjust these values to fine-tune the spacing
            disabled={isLoginDisabled} // Disable the button if username or password is empty
          >
            Sign Up
          </Button>

          <Typography
            variant="subtitle1"
            align="center"
            color="#083156"
            style={{ marginTop: "25px", fontSize: "18px" }} // Adjust these values to fine-tune the spacing
          >
            Already have an account?
            <Link to="/login" style={{ color: theme.palette.primary.main, textDecoration: "none", marginLeft: "10px" }}>
              Login
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
            <Link to="/terms-and-conditions" style={{ color: "#777777", textDecoration: "none" }}>
            Terms and Conditions
            </Link>
            <span style={{ margin: "0 15px" }}> | </span>
            <Link to="/privacy-policy" style={{ color: "#777777", textDecoration: "none" }}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default UserRegistrationPage;
