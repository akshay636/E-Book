import { Container } from "@mui/system";
import React, { useEffect } from "react";
import BasicCard from "./base/ BasicCard";
import { Grid } from "@mui/material";
import Books from "./Books";
import { useDispatch, useSelector } from "react-redux";
import { GetBooks } from "./middleware/bookMiddleware";
const data = ["Books", "Category", "Users", "Audio Book","Update User","Delete User","Add User","Return Book"];

const Dashboard = ({mode}) => {

  return (
    <Container sx={{ marginTop: "150px" }}>
      <div>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map((name, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={data.indexOf(name)}>
                <BasicCard
                name={name}
                count={2}
                mode={mode}
                 />
              </Grid>
            );
          })}
        </Grid>{" "}
      </div>
    </Container>
  );
};

export default Dashboard;
