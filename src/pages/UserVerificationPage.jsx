


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

import { useLocation, useNavigate } from "react-router-dom";
// import { requestLogin } from '../service/authAPiService'
import globalSettingsConfig from '../globalSettingsConfig';
import { requestRegister } from "../api/Profile/userApiService";
// import { pubSub } from '../utils/pubSub';
const UserVerificationPage = () => {
  const theme = useTheme();

  const [verifyCode, setVerifyCode] = useState("");
 
  // const navigate = useNavigate();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const account = query.get("account");

  const handleVerificationCodeChange = (event) => {
    setVerifyCode(event.target.value);
  };

 

  const handleLogin = async () => {

    console.log("account===xxxxx=", account);

    // Perform login logic here
    // navigate('/dashboard');
    // try {
    //   // pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

    //   const response = await requestRegister(account, password);

    //   // if (response.)
    //   console.log("response====", response);
    //   if (response.success) {
    //     if (response.data) {
    //     //   console.log("response.data====", response.data);
    //     //   console.log("response.data.accessToken====", response.data.data.accessToken);
    //     //   console.log("response.data.refreshToken====", response.data.refreshToken);
    //     //   console.log("-0000===",globalSettingsConfig.localStorageKeys.ACCESS_TOKEN);
    //     //   localStorage.setItem(globalSettingsConfig.localStorageKeys.ACCESS_TOKEN, response.data.accessToken);
    //     //   localStorage.setItem(globalSettingsConfig.localStorageKeys.REFRESH_TOKEN, response.data.refreshToken);

    //       // console.log("response.data.accessToken===read from local=",localStorage.getItem(globalSettingsConfig.localStorageKeys.ACCESS_TOKEN));
    //       // console.log("response.data.refreshToken===read from local=",localStorage.getItem(globalSettingsConfig.localStorageKeys.REFRESH_TOKEN));
    //     }
    //     // navigate('/dashboard');
    //   } else {
    //     // pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   // pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, false);
    // }
  };

  const isLoginDisabled = !verifyCode ; // Check if username or password is empty

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
            onClick={handleLogin}
            style={{ height: "55px", borderRadius: "6px", marginTop: "40px" }} // Adjust these values to fine-tune the spacing
            disabled={isLoginDisabled} // Disable the button if username or password is empty
          >
            Verify
          </Button>

          <Typography
            variant="subtitle1"
            align="center"
            color="#083156"
            style={{ marginBottom:"20px", marginTop:"20px", fontSize: "18px" }} // Adjust these values to fine-tune the spacing
          >
            {/* Don&apos;t have an account? */}
            <Link to="/register" style={{ color:  theme.palette.primary.main, textDecoration: "none" }}>
              Resend verification code
            </Link>
          </Typography>
       

    
        </Box>
      </Box>
    </Container>
  );
};

export default UserVerificationPage;
