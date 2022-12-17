import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, Link } from "react-router-dom";

const img = {
  display: "block",
  maxWidth: "200px",
  maxHeight: "200px",
  width: "auto",
  height: "auto",
  ml: "50px",
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function CateCard(props) {
  const { data } = props;
  console.log(data, "[[");
  return (
    <Card
      sx={{
        ml: 3,
        maxWidth: 245,
        height: 380,
        border: "2px solid #1976d2",
        "&:hover": {
          boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={data?.image?.name}
        image={data?.image?.url}
        sx={img}
      />
      <CardContent>
        <Typography variant="p" component="div">
          {data?.name}
          {bull}
        </Typography>
        <Typography variant="p" component="div">
          Author: {data?.author}
          {bull} Page-{data?.pages} {bull} Price:{data?.price} {bull} Year:
          {data?.year}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small">View</Button>
        <Button
          size="small"
          onClick={() => {
            window.open(data.link);
          }}
        >
          DOWNLOAD
        </Button>
      </CardActions>
    </Card>
  );
}
