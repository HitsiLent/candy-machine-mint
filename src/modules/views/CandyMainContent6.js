import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.lavender,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function CandyMainContent6() {
  const classes = useStyles();

  return (
    <Typography component="section" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6} style={{ alignSelf: "center" }}>
            <Typography variant="h4" id="about" component="span">What are Doo Doos?
            </Typography>
            <Typography variant="subtitle1" >
              Doo Doos are a collection of programmatically, randomly generated NFTs on the Solana blockchain. The first drop generation consists of 5,000 randomly assembled doodles from over 500k total options. Doo Doos have a variety of outfits, faces, colors and backgrounds. Each Doo Doo has a unique body, hat, face and outfit. Some Doo Doos have their own unqiue streetwear apparels!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src="/static/candy/walkcycle.gif" style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid >
      </Container >
    </Typography >
  );
}
