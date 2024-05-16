import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginPage() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="left"
      alignItems="center"
      minHeight="100vh"
      marginTop={20}
      p={3}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }} // Make the text bold
      >
        Welcome, please login
      </Typography>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{ width: "100%", maxWidth: 400 }} // Increased maxWidth and added margin-top
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              {t("login")}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: -1, fontSize: 12, opacity: 0.58 }}
            >
              By continuing, you agree to our{" "}
              <Link href="#" underline="always">
                {t("terms")}
              </Link>{" "}
              and{" "}
              <Link href="#" underline="always">
                {t("Privacy Policy")}
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, fontWeight: "bold", fontSize: 16, opacity: 0.78 }}
            >
              NEED AN ACCOUNT?{""}
              <Link href="#" underline="always">
                <span style={{ marginLeft: 16 }}>SIGN UP</span>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default LoginPage;
