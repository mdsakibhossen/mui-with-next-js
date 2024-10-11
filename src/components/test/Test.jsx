"use client";

import { Button, Stack, Typography } from "@mui/material";

const Test = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" mb={5}>
        Welcome to My MUI + Next.js App!
      </Typography>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <Button variant="contained" color="secondary">
          Click Me
        </Button>
        <Button variant="outlined" color="primary">
          Click Me
        </Button>
      </Stack>
    </div>
  );
};
export default Test;
