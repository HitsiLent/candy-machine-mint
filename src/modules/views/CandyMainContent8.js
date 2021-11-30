import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://doodoonft.com/">
        Doo Doo
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
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

export default function CandyMainContent10() {
  const classes = useStyles();

  return (
    <Typography component="section" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography id="faq" variant="h1"  component="span">FAQ</Typography>
          </Grid >
          <Grid item xs={12}>
            <Typography variant="h4" component="span">When is the mint date?</Typography>
            <Typography variant="subtitle1" >11/25/2021 8PM EST</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">How many DooDoo NFT will be sold?</Typography>
            <Typography variant="subtitle1" >5000 DooDoos</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">Will it be any marketplaces?</Typography>
            <Typography variant="subtitle1" >Yes, we will try to list on ME,DE,AA</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">What is Mint Price?</Typography>
            <Typography variant="subtitle1" >Mint Price will be 0.1 Sol</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">What's DooDoo?</Typography>
            <Typography variant="subtitle1" >DooDoo is our Streetwear brand name.</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">What's different than other projects?</Typography>
            <Typography variant="subtitle1" >We are streetwear based NFT, We will launch our merchant store right after the mint. and some of the merch is already in production and will be delivered on November. 400 pieces includes Hoodie/Sweater/T-shirt/Joggers/hat will give away to minters. All Holders will have 20% off on our merchant store.</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">What Solana Wallets can I use?</Typography>
            <Typography variant="subtitle1" >We will be using Phantom wallet for the website connection.</Typography>
          </Grid >

          <Grid item xs={12}>
            <Typography variant="h4" component="span">What’s an NFT?</Typography>
            <Typography variant="subtitle1" >An NFT stands for “Non-fungible token” and it’s a unique, one of a kind digital item that users can buy, own, and trade.</Typography>
          </Grid >

        </Grid >
      </Container >
    </Typography >
  );
}
