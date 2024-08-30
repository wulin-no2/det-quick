import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import { Button, Menu, MenuItem, Modal } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

function ProfileMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { logout } = useAuth(); // 从 AuthContext 中获取 login 函数

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        logout();

    }

    return (
        <>
            <IconButton
    onClick={handleMenu}
    sx={{
        color: 'gray',  // 直接指定颜色
        '&:hover': {
            // 可以在这里设置悬停状态下的样式，如果需要
            backgroundColor: 'transparent'
        },
        '&.Mui-focusVisible': {
            outline: 'none'
        },
        '&:active': {
            boxShadow: 'none'
        },
        '&:focus': {
            outline: 'none'
        }
    }}
>
    <AccountCircleIcon fontSize="large" />
</IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',   // 菜单顶部与图标底部对齐
                        // horizontal: 'center', // 菜单中心与图标中心对齐
                        horizontal: 'right',

                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',      // 菜单从顶部展开
                        // horizontal: 'center', // 菜单从中心展开
                        horizontal: 'right',

                    }}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            sx: {
                                mt: '8px', // 添加5px的顶部外边距
                                border: '1px solid #ccc', // 设置边框，颜色为#ccc
                                borderRadius: '10px', // 设置20px的圆角
                            }
                        }
                    }}
                >
                    <MenuItem sx={{
                        margin: '5px 8px',
                        '&:hover': {
                            backgroundColor: 'transparent',  // 设置悬停时的背景色为透明
                            cursor: 'default'  // 将鼠标指针样式设置为默认，非指针样式
                        }
                    }}>
                        <Typography variant="inherit" noWrap>
                            laurenceyou12345@gmail.com
                        </Typography>
                    </MenuItem>
                    <Divider sx={{ margin: '0 20px' }} />
                    <MenuItem onClick={handleClose} sx={{}}>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        My Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <LanguageIcon fontSize="small" />
                        </ListItemIcon>
                        Language
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Modal>

        </>
    );
}

export default ProfileMenu;
