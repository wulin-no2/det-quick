

import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, Button, Container, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import globalSettingsConfig from '../globalSettingsConfig';
import ProfileMenu from '../components/common/ProfileMenu';
import { useAuth } from '../context/AuthContext'; // 确保路径正确
import { pubSub } from '../utils/pubSub';

// 使用 styled-components 创建一个样式化的 NavLink
const StyledNavLink = styled(NavLink)`
  color: #333;
  font-size: 20px;  // 增加字体大小
  margin: 20px 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
    
  &:hover, &.active {
    color: #007bff;  // 正确的颜色值，移除引号
    // background-color: #007BFF;
  }
`;

function ResponsiveAppBar() {
    //<svg t="1726121332059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2405" width="128" height="128"><path d="M874.14784 444.99968l-49.2544 19.37408v228.48512a79.2576 79.2576 0 0 1-52.75648 74.68032L541.50144 849.5104a79.34976 79.34976 0 0 1-53.20704 0l-230.64576-81.98144a79.2576 79.2576 0 0 1-52.75648-74.68032V466.66752l-12.06272-4.74112a24.63744 24.63744 0 0 1 18.0224-45.84448l296.05888 116.4288c3.76832 1.72032 6.4 1.72032 8.68352 0.64512 0.32768-0.1536 138.1888-54.38464 413.58336-162.69312a8.50944 8.50944 0 0 0 0.01024-14.85824L517.08928 193.54624c-3.75808-1.72032-6.41024-1.72032-8.69376-0.64512-0.32768 0.16384-138.17856 54.39488-413.57312 162.70336a8.50944 8.50944 0 0 0 0.01024 14.85824l25.47712 10.02496a24.61696 24.61696 0 0 1-18.01216 45.83424l-26.49088-10.41408c-45.6192-21.47328-45.6192-84.28544-1.49504-105.10336 0.32768-0.14336 138.30144-54.43584 413.93152-162.83648a57.7536 57.7536 0 0 1 47.52384 0l412.43648 162.2016c45.60896 21.46304 45.60896 84.26496 1.49504 105.09312l-27.19744 10.71104a24.576 24.576 0 0 1 0.89088 6.59456V677.376a24.6272 24.6272 0 0 1-49.2544 0V444.99968z m-98.5088 38.74816l-239.872 94.35136a57.69216 57.69216 0 0 1-47.53408 0l-234.0864-92.0576v206.81728c0 12.68736 8.00768 24.00256 19.99872 28.27264l230.656 81.98144a30.1056 30.1056 0 0 0 20.19328 0l230.656-81.98144a30.0032 30.0032 0 0 0 19.98848-28.2624V483.74784z m0 0" fill="#357af5" p-id="2406"></path></svg>

    const LogoSVG = () => (
        <svg t="1726121332059" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" >
          <path d="M874.14784 444.99968l-49.2544 19.37408v228.48512a79.2576 79.2576 0 0 1-52.75648 74.68032L541.50144 849.5104a79.34976 79.34976 0 0 1-53.20704 0l-230.64576-81.98144a79.2576 79.2576 0 0 1-52.75648-74.68032V466.66752l-12.06272-4.74112a24.63744 24.63744 0 0 1 18.0224-45.84448l296.05888 116.4288c3.76832 1.72032 6.4 1.72032 8.68352 0.64512 0.32768-0.1536 138.1888-54.38464 413.58336-162.69312a8.50944 8.50944 0 0 0 0.01024-14.85824L517.08928 193.54624c-3.75808-1.72032-6.41024-1.72032-8.69376-0.64512-0.32768 0.16384-138.17856 54.39488-413.57312 162.70336a8.50944 8.50944 0 0 0 0.01024 14.85824l25.47712 10.02496a24.61696 24.61696 0 0 1-18.01216 45.83424l-26.49088-10.41408c-45.6192-21.47328-45.6192-84.28544-1.49504-105.10336 0.32768-0.14336 138.30144-54.43584 413.93152-162.83648a57.7536 57.7536 0 0 1 47.52384 0l412.43648 162.2016c45.60896 21.46304 45.60896 84.26496 1.49504 105.09312l-27.19744 10.71104a24.576 24.576 0 0 1 0.89088 6.59456V677.376a24.6272 24.6272 0 0 1-49.2544 0V444.99968z m-98.5088 38.74816l-239.872 94.35136a57.69216 57.69216 0 0 1-47.53408 0l-234.0864-92.0576v206.81728c0 12.68736 8.00768 24.00256 19.99872 28.27264l230.656 81.98144a30.1056 30.1056 0 0 0 20.19328 0l230.656-81.98144a30.0032 30.0032 0 0 0 19.98848-28.2624V483.74784z m0 0" fill="#357af5" p-id="2406"></path>
        </svg>
      );
      

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };

    const handleLoginClick = () => {
        navigate("/login"); // link to login
    };

    const { logout, setIsLoggedIn, isLoggedIn } = useAuth(); // 从 AuthContext 获取状态和方法


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    // 为了使链接更容易区分，添加了capitalize函数
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

      // 处理登录状态变更的 useEffect
  useEffect(() => {
    const handleLoginSuccess = (data) => {
      console.log("login success998998");
      setIsLoggedIn(data.loggedIn);
    };

    const handleLoginFailure = (data) => {
      setIsLoggedIn(data.loggedIn);
      
      console.log("login failed998998");
    }

    pubSub.subscribe(globalSettingsConfig.event.AUTH_LOGIN_SUCCESS, handleLoginSuccess);
    pubSub.subscribe(globalSettingsConfig.event.AUTH_LOGIN_FAILURE, handleLoginFailure);

    return () => {
      pubSub.unsubscribe(globalSettingsConfig.event.AUTH_LOGIN_SUCCESS, handleLoginSuccess);
      pubSub.unsubscribe(globalSettingsConfig.event.AUTH_LOGIN_FAILURE, handleLoginFailure);
    };
  }, []);


    return (
        <Box sx={{ flexGrow: 1, width: '100%', m: 0, p: 0 }}>
            <AppBar position="position" sx={{ width: '100%', m: 0, borderBottom: '1px solid #ccc' }} elevation={0}>
                {/* <Container maxWidth="xl"> */}
                <Box sx={{ width: '100%', paddingX: globalSettingsConfig.layoutMargins.horizontalWindowMargin, }}>
                    <Toolbar disableGutters>

                        {/* <Box sx={{
                            // ml: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',  // 确保Logo和文字在同一水平线上
                            color: 'black'
                        }}>
                            <img src="logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                            <Typography variant="h5" noWrap component="h5"
                            sx={{fontWeight:'700'}}>
                            Grimlingo DET 
                            </Typography>
                        </Box> */}
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'black' }}
                            onClick={handleLogoClick}
                            style={{ cursor: 'pointer' }}>
                            <LogoSVG />


                            {/* <img src="logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} /> */}
                            <Typography variant="h5" noWrap component="div" sx={{ fontWeight: '700' ,ml:'20px'}}>
                                Grimlingo DET
                            </Typography>
                        </Box>
                        <Box sx={{
                            mr: '15px',
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end'
                        }}>
                            <IconButton
                                size="large"
                                aria-label="open drawer"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{
                            flexGrow: 8,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'space-around',
                            marginX: '150px'
                        }}>
                            <StyledNavLink to="/" activeClassName="active">
                                Home
                            </StyledNavLink>
                            <StyledNavLink to="/practice" activeClassName="active">
                                Practice
                            </StyledNavLink>
                            <StyledNavLink to="/courses" activeClassName="active">
                                Courses
                            </StyledNavLink>
                            <StyledNavLink to="/pricing" activeClassName="active">
                                Pricing
                            </StyledNavLink>
                            <StyledNavLink to="/blog" activeClassName="active">
                                Blog
                            </StyledNavLink>
                        </Box>
                        <Button color="primary" variant="contained"
                        onClick={handleLoginClick}
                            sx={{
                                // mr: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                                mr: 0,  // 确保按钮紧靠右边
                                px: '20px',  // 增加水平内边距
                                flexGrow: 0,
                                color: '#fff',
                                borderRadius: '30px',
                                fontSize: '20px',
                                textTransform: "none",
                                display: { xs: 'none', md: 'flex' }
                            }}>
                            Sign  in
                        </Button>
                    </Toolbar>
                </Box>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
                sx={{ '& .MuiDrawer-paper': { width: '100%', bgcolor: 'background.paper' } }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src="logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6">Grimlingo DET</Typography>
                    </Box>
                    <IconButton onClick={handleMobileMenuClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {['/home', '/products', '/courses', '/pricing', '/blog'].map((path) => (
                        <ListItem button key={path} onClick={handleMobileMenuClose}>
                            <NavLink to={path} style={{ width: '100%', padding: '10px 20px', textDecoration: 'none', color: 'inherit' }}
                                activeStyle={{ color: 'red' }}>
                                {capitalize(path.substring(1))}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Box sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
                    
                    <Button fullWidth color="primary" variant="contained" onClick={handleMobileMenuClose}
                        sx={{
                            textTransform: "none",
                        }}>
                        Sing in
                    </Button>
                </Box>
            </Drawer>

        </Box>
    );
}

export default ResponsiveAppBar;