import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import CateCard from "./base/CateCard";
import Carousel from "better-react-carousel";
import { getAllBooks } from "../services/books";

const drawerWidth = 240;

const categoryIcon = [
  <SchoolIcon />,
  <LocalLibraryIcon />,
  <PhotoAlbumIcon />,
  <AutoStoriesIcon />,
];

function Category(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("Educational");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategory = (name) => {
    setCategoryName(name);
  };

  const handleCategoryData = (categoryName) => {
    switch (categoryName) {
      case "Educational":
        return ;
      case "Comics":
        return setCategoryData([]);
      case "Fiction":
        return setCategoryData([]);
      case "Fiction":
        return setCategoryData([]);
      default:
        return setCategoryData([]);
    }
  };

  useEffect(() => {
    handleCategoryData(categoryName);
  }, [categoryName]);

  useEffect(() => {
    (async () => {
      const res = await getAllBooks();
      setCategoryData(res.data.books);
    })();
    return () => {};
  }, []);

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {["Educational", "Comics", "Fiction", "Non-fiction"].map(
          (name, index) => (
            <ListItem
              key={name}
              disablePadding
              onClick={(event) => {
                handleCategory(name);
              }}
            >
              <ListItemButton>
                <ListItemIcon>{categoryIcon[index]}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="akkkkkk">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: { sm: 8, md: 8, lg: 8, xs: 6 },
        }}
        className="sumit"
      >
        <Toolbar className="tooooo">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ ml: 6 }}>
            {categoryName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        container={+true}
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 3,
          ml: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {categoryData.length === 0 ? (
          <p className="nodee">No Data Related Category!</p>
        ) : (
          <Carousel cols={4} rows={1} gap={6}>
            {categoryData?.map((val, index) => {
              return (
                <Carousel.Item key={val + index} width={"100%"}>
                  <CateCard name={index} data={val} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
      </Box>
    </Box>
  );
}

export default Category;
