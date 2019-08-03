import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "./App.css";
import image from "./solar.jpg";

import { shadows } from "@material-ui/system";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    padding: theme.spacing(20, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  toolBar: {
    backgroundColor: "#AC65F3"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    width: "120%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NAME = "Burrel";
const DESC =
  "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet";
const imageSource = [
  [require("./community.jpg"), NAME, DESC],
  [require("./community2.jpg"), NAME, DESC],
  [require("./community3.jpg"), NAME, DESC],
  [require("./community4.jpg"), NAME, DESC],
  [require("./community5.jpg"), NAME, DESC],
  [require("./community6.jpg"), NAME, DESC]
];

export default function Album() {
  const classes = useStyles();
  const theme = createMuiTheme({
    overrides: {
      boxShadow: "none"
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar
        position="relative"
        style={{ backgroundColor: "#FFF", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap style={{ color: "#ff731c" }}>
            OffGrid
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div
          class="main_container"
          className={classes.heroContent}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            height: "100vh"
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Off Grid Solar
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {imageSource.map(image => (
              <Grid item key={image} xs={12} sm={6} md={4}>
                <Card className={classes.card} style={{ boxShadow: "none" }}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image[0]}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {image[1]}
                    </Typography>
                    <Typography>{image[2]}</Typography>
                  </CardContent>
                  <CardActions />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <MadeWithLove />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
