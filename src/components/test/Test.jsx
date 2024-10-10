"use client";

import { Button, Typography } from "@mui/material";

const Test = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My MUI + Next.js App!
      </Typography>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </div>
  );
};
export default Test;
