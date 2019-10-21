import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://pata-hao.netlify.com/">
        pata-hao
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Foooter = () => {
  return (
    <footer>
      <Container>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Foooter;
