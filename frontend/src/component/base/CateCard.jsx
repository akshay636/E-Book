// import * as React from "react";
// import Card from "@mui/material/Card";
// import { Box } from "@mui/system";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";

// import Typography from "@mui/material/Typography";
// import { useNavigate, Link } from "react-router-dom";

// const img = {
//   display: "block",
//   maxWidth: "200px",
//   maxHeight: "200px",
//   width: "auto",
//   height: "auto",
//   ml: "50px",
// };

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );

// export default function CateCard(props) {
//   const { data } = props;

//   return (
//     <Card
//       sx={{
//         ml: 3,
//         maxWidth: 245,
//         height: 380,
//         border: "2px solid #1976d2",
//         "&:hover": {
//           boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
//         },
//       }}
//     >
//       <CardMedia
//         component="img"
//         alt={data?.image?.name}
//         image={data?.image?.url}
//         sx={img}
//       />
//       <CardContent>
//         <Typography variant="p" component="div">
//           {data?.name}
//           {bull}
//         </Typography>
//         <Typography variant="p" component="div">
//           Author: {data?.author}
//           {bull} Page-{data?.pages} {bull} Price:{data?.price} {bull} Year:
//           {data?.year}
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Button size="small">View</Button>
//         <Button
//           size="small"
//           onClick={() => {
//             window.open(data.link);
//           }}
//         >
//           DOWNLOAD
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { createTheme } from "@mui/material";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useNewsInfoStyles } from "@mui-treasury/styles/info/news";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-root": {
     color:"blue"
    }
  },
  card: {
    minWidth: 320,
    position: "relative",
    // boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: "visible",
    borderRadius: "1.5rem",
    transition: "0.4s",
  
    "&:hover": {
      transform: "translateY(-2px)",
      "& $shadow": {
        bottom: "-1.5rem",
      },
      "& $shadow2": {
        bottom: "-2.5rem",
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      zIndex: 0,
      display: "block",
      width: "100%",
      bottom: -1,
      height: "100%",
      borderRadius: "1.5rem",
      backgroundColor: "rgba(0,0,0,0.08)",
    },
  },
  main: {
    overflow: "hidden",
    borderTopLeftRadius: "1.5rem",
    borderTopRightRadius: "1.5rem",
    zIndex: 1,
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      display: "block",
      width: "100%",
      height: "100%",
      // background: "linear-gradient(to top, #4b6374, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1,
    // padding: "1.5rem 1.5rem 1rem",
  },
  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: "inline-block",
    fontFamily: "'Sen', sans-serif",
    backgroundColor: "#ff5dac",
    borderRadius: "0.5rem",
    padding: "2px 0.7rem",
    color: "#fff",
    height: "25px",
    marginTop: "8px",
  },
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: "2rem",
    fontWeight: 800,
    color: "#fff",
     background: "linear-gradient(to bottom , #1976d2, rgba(3,2,1,0.8))",
  },
  author: {
    justifyContent: "space-between",
    zIndex: 1,
    position: "relative",
    borderBottomLeftRadius: "1.5rem",
    borderBottomRightRadius: "1.5rem",
  },
  shadow: {
    transition: "0.2s",
    position: "absolute",
    zIndex: 0,
    width: "88%",
    height: "100%",
    bottom: 0,
    borderRadius: "1.5rem",
    backgroundColor: "rgba(0,0,0,0.06)",
    left: "50%",
    transform: "translateX(-50%)",
  },
  shadow2: {
    bottom: 0,
    width: "72%",
    backgroundColor: "rgba(0,0,0,0.04)",
  },
}));

 const CateCard = (props) => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const { data } = props;
  return (
    <>
      <Card className={styles.card}>
        <Box className={styles.main} minHeight={300} position={"relative"}>
          <CardMedia classes={mediaStyles} image={data?.image?.url} />
          <div className={styles.content}>
            <Typography variant={"h2"} className={styles.title}>
              {data?.name}
            </Typography>
          </div>
        </Box>
        <div>
          <Row
            className={styles.author}
            m={0}
            p={3}
            pt={2}
            gap={2}
            bgcolor={"common.white"}
          >
            <Info position={"middle"} useStyles={useNewsInfoStyles}>
              <InfoTitle>{data.author}</InfoTitle>
              <InfoSubtitle>
                Publish: {data?.year} |{data.pages} Pages
              </InfoSubtitle>
              <InfoSubtitle>
                <Button size="small" sx={{ml:-2}}>View</Button>
                <Button
                  size="small"
                  onClick={() => {
                    window.open(data.link);
                  }}
                >
                  DOWNLOAD
                </Button>
              </InfoSubtitle>
            </Info>
            <div className={styles.tag}>{data?.price}₹</div>
          </Row>
        </div>

        <div className={styles.shadow} />
        <div className={`${styles.shadow} ${styles.shadow2}`} />
      </Card>
    </>
  );
};
export default CateCard;
