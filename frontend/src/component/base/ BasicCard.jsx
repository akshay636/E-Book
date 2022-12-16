import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/material";
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard({ name, mode, classes }) {
  const navigate= useNavigate();
  return (
    <Card
      sx={{
        width: "200px",
        backgroundColor: mode === "Light" ? "white" : "#9400D3",
        color: mode === "Light" ? "#1976d2" : "white",
        "&:hover": {
          boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
          color:"black"
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
          {bull}
        </Typography>
        <Typography
          varient="h3"
          sx={{ mb: 1.5 }}
          color={mode === "Light" ? "text.secondary" : "white"}
        >
          3
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" size="small" onClick={()=>navigate(`/${name}`)}>See</Button>
      </CardActions>
    </Card>
  );
}
