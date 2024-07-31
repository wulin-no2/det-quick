import  { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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

} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { requestLogin } from '../service/authAPiService'
// import globalSettingsConfig from '../globalSettingsConfig';
import { loginApi } from '../api/Profile/login';
// import { pubSub } from '../utils/pubSub';
const UserLoginPage = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();

    const handleAccountChange = (event) => {
        setAccount(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        // Perform login logic here
        // navigate('/dashboard');
        console.log("account===xxxxx=", account);
        try {
            // pubSub.publish(globalSettingsConfig.event.SHOW_LOADING, true);

            const response = await loginApi(account, password);
        
            // if (response.)
            console.log("response====", response);
            if(response.success){
                if(response.data){
                    // localStorage.setItem(globalSettingsConfig.localStorageKeys.ACCESS_TOKEN, response.data.accessToken);
                    // localStorage.setItem(globalSettingsConfig.localStorageKeys.REFRESH_TOKEN, response.data.refreshToken);
                    // localStorage.setItem(globalSettingsConfig.localStorageKeys.USER_ID, response.data.userId);
                }
                // navigate('/dashboard');

            }else{
            // pubSub.publish(globalSettingsConfig.event.SHOW_TOAST, response.message);
            }
        } catch (error) {
            console.error(error);
        } finally
        {
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
                    gap="2rem"
                    boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
                    borderRadius="10px"
                    style={{ backgroundColor: '#ffffff', padding: '4rem 4rem' }}
                >
                   

                        <Typography variant="h4" align="center" color="#083156">
                            Log in to your account
                        </Typography>

                    <FormControl>
                        <TextField
                            label="Account"
                            value={account}
                            onChange={handleAccountChange}
                        />
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={handleLogin}

                        style={{ height: '50px',borderRadius: '8px'}}
                        disabled={isLoginDisabled} // Disable the button if username or password is empty
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default UserLoginPage;
