import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <div className="content">
      <div className="container">
        <Box className="p-4 max-w-lg mx-auto">
          <h1>THIS IS A WEBSITE</h1>
          <Button variant="contained" color="primary">
            MUI Button
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default HomePage;
