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
          <Grid item xs={6} sm={8} md={6} style={{ alignSelf: "center" }}>
            <Typography variant="h4" component="span">What are Cool Cats?
            </Typography>
            <Typography variant="subtitle1" >
              Cool Cats are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!
            </Typography>
          </Grid>
          <Grid item xs={6} sm={8} md={6}>
            <img src="/static/candy/download-4.png" style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid >
      </Container >
    </Typography >
  );
}
