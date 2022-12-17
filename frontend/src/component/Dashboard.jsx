import { Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import BasicCard from "./base/ BasicCard";
import { Grid } from "@mui/material";
import { dashboardCard } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/bookSlice";

const Dashboard = ({ mode }) => {
  const bookss = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const getAll = useCallback(() => dispatch(fetchBooks()));
  useEffect(() => {
    getAll();
  }, []);
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
          {dashboardCard.map((name) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={dashboardCard.indexOf(name)}
              >
                <BasicCard name={name} count={bookss?.length} mode={mode} />
              </Grid>
            );
          })}
        </Grid>{" "}
      </div>
    </Container>
  );
};

export default Dashboard;
