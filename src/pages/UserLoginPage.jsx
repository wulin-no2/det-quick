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

import { useLocation, useNavigate } from 'react-router-dom';
// import { requestLogin } from '../service/authAPiService'
import { requestLogin } from "../api/Profile/userApiService";
import globalSettingsConfig from "../globalSettingsConfig";
// import { loginApi } from "../api/Profile/login";
import { pubSub } from '../utils/pubSub';
import { useAuth } from "../context/AuthContext"

const UserLoginPage = () => {
  const theme = useTheme();
  const { login } = useAuth(); // 从 AuthContext 中获取 login 函数


  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 尝试获取从哪里重定向过来的信息，如果没有则默认重定向到首页
  const { from } = location.state || { from: { pathname: "/" } };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);

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
      pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

      const response = await requestLogin(account, password);

      // if (response.)
      console.log("response====", response);
   

      if (response.success && response.data) {
        // 使用新的数据结构
        if (response.data.accessToken) {
          login({
            accessToken: response.data.accessToken,
            expiresAt: response.data.expiresAt // 保存令牌过期时间
          });
          // <Redirect to={from.pathname} />;
          navigate(from.pathname); // 使用保存的路径进行重定向
        }
      }else {
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
              to="/password-reset"
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

export default UserLoginPage;
