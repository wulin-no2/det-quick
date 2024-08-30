


import React, { useState, useEffect } from "react";

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

import { useLocation, useNavigate } from "react-router-dom";
// import { requestLogin } from '../service/authAPiService'
import globalSettingsConfig from '../globalSettingsConfig';
import { requestSendVerificationCode, requestVerifyCode } from "../api/Profile/userApiService";
import { pubSub } from '../utils/pubSub';
import { useAuth } from "../context/AuthContext"

const UserVerificationPage = () => {
  const theme = useTheme();

  const [verifyCode, setVerifyCode] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth(); // 从 AuthContext 中获取 login 函数


  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const account = query.get("account");

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await requestSendVerificationCode(account);
        if (response.success) {

        } else {

        }
      }
      catch (error) {
        console.error(error);
      } finally {

      }

    }
    fecthData();

  }, []); // 


  const handleVerificationCodeChange = (event) => {
    setVerifyCode(event.target.value);
  };




  const handleVerify = async () => {

    try {
      pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

      const response = await requestVerifyCode(account, verifyCode);
      if (response.success && response.data) {
        // 使用新的数据结构
        if (response.data.accessToken) {
          login({
            accessToken: response.data.accessToken,
            expiresAt: response.data.expiresAt // 保存令牌过期时间
          });
          navigate("/"); 
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





    const isLoginDisabled = !verifyCode; // Check if username or password is empty

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
              Confirm your email now
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              color="#083156"
              style={{ marginTop: "25px", fontSize: "18px" }} // Adjust these values to fine-tune the spacing
            >
              <p>We sent a verification code to</p>
              <p>{account}</p>

            </Typography>

            <FormControl variant="outlined" style={{ marginTop: "40px" }}>
              <TextField
                label="Verification Code"
                value={verifyCode}
                onChange={handleVerificationCodeChange}
              />
            </FormControl>


            <Button
              variant="contained"
              type="submit"
              onClick={handleVerify}
              style={{ height: "55px", borderRadius: "6px", marginTop: "40px" }} // Adjust these values to fine-tune the spacing
              disabled={isLoginDisabled} // Disable the button if username or password is empty
            >
              Verify
            </Button>

            <Typography
              variant="subtitle1"
              align="center"
              color="#083156"
              style={{ marginBottom: "20px", marginTop: "20px", fontSize: "18px" }} // Adjust these values to fine-tune the spacing
            >
              {/* Don&apos;t have an account? */}
              <Link to="/register" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                Resend verification code
              </Link>
            </Typography>



          </Box>
        </Box>
      </Container>
    );
  };

  export default UserVerificationPage;
