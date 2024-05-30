import { Box, Link, Typography } from "@mui/material";

function HomePage() {
  return (
    <div className="content">
      <div className="container">
        <Box className="p-4 max-w-lg mx-auto">
          <Typography variant="h3" component={Link} href={`/practice`}>
            Practice Now
          </Typography>
          {/* <Button variant="contained" color="primary">
            MUI Button
          </Button> */}
        </Box>
      </div>
    </div>
  );
}

export default HomePage;
