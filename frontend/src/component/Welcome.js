import { Grid, Typography } from "@material-ui/core";
import Footer from "./footer/Footer";
import Home from "./Home";
import Login from "./Login";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2"></Typography>
      </Grid>
      {/* <Home/> */}
      
      <Login/>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
      <Footer/>
    </Grid>
  );
};

export default Welcome;
