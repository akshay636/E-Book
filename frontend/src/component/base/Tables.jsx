import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import SearchBar from "./SearchBar";
import { deleteBook, getAllBooks } from "../../services/books";

import MsgBar from "./MsgBar";
import { useDispatch, useSelector } from "react-redux";
import { delBook, editBook, fetchBooks } from "../../features/books/bookSlice";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function ascendingComparator(a, b, orderBy) {
  if (b[orderBy] > a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => ascendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  const ak = stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "author",
    numeric: true,
    disablePadding: false,
    label: "Author",
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "Year",
  },
  {
    id: "language",
    numeric: true,
    disablePadding: false,
    label: "Language",
  },
  {
    id: "pages",
    numeric: true,
    disablePadding: false,
    label: "Pages",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">SNo.</TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="normal" align="right">
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Books
          </Typography>
        )}
        <SearchBar />
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
const msgIntial = {
  msg: "",
  color: "",
  loading: false,
};
export default function Tables({ setBook, setIsEditing }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("year");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [id, setId] = useState("");
  const [isAlert, setIsALert] = useState(msgIntial);
  const bk = useSelector((state) => state.book.books);
  const { book } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  console.log("sipp", book);
  const rows = bk.map((val) => ({
    name: val.name,
    author: val.author,
    price: val.price,
    language: val.language,
    year: val.year,
    pages: val.pages,
    action: [<EditIcon />, <DeleteIcon />],
  }));

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleEdit = (index) => {
    const bks = bk[index];
    setBook(bks);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await dispatch(delBook(id));
      // const res = await deleteBook(id);
      if (res) {
        setIsALert({
          msg: res?.payload?.data?.message,
          color: "blue",
          loading: true,
        });
      }
    } catch (error) {
      setIsALert({ msg: error.message, color: "red", loading: true });
    }
  };

  useEffect(() => {
    let timeout;
    if (isAlert) {
      timeout = setTimeout(() => {
        setIsALert(msgIntial);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isAlert]);

  useEffect(() => {
    dispatch(fetchBooks());

    return () => {};
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      {isAlert.loading ? (
        <MsgBar msg={isAlert.msg} color={isAlert.color} mt={6} />
      ) : (
        ""
      )}
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} id={id} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow hover key={`luffy${index * 10}`}>
                      <TableCell padding="checkbox">{index + 1}.</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.author}</TableCell>
                      <TableCell align="right">{row.year}</TableCell>
                      <TableCell align="right">{row.language}</TableCell>
                      <TableCell align="right">{row.pages}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <IconButton
                          onClick={() => {
                            handleEdit(index);
                          }}
                        >
                          {row.action[0]}
                        </IconButton>
                        &nbsp;
                        <IconButton
                          onClick={() => handleDelete(bk?.[index]?._id)}
                        >
                          {row.action[1]}
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
