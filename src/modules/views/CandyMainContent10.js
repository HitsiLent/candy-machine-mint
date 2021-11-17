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
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.doodoo.lavender,
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

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'zh-Hans',
    name: '中文',
  },
];

export default function CandyMainContent10() {
  const classes = useStyles();

  return (
    <Typography component="section" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item>
            <Typography variant="h4" component="span">Cool Cat Live Stream!</Typography>
            <Typography variant="subtitle1" >Tune into Clon on Wednesday at 1PM EST and catch some live Cool Cat illustration community collaboration session (https://www.twitch.tv/cloncast)</Typography>
          </Grid ><Grid item>
            <Typography variant="h4" component="span">Launch Gen 1 Cool Cats</Typography>
            <Typography variant="subtitle1" >On July 1, we’re going live baby!!!</Typography>
          </Grid ><Grid item>
            <Typography variant="h4" component="span">Monthly Exclusive NFT Kickoff</Typography>
            <Typography variant="subtitle1" >Cool Cat holders will have a chance to claim a limited edition, custom Cool Cat NFT each month, there might even be collabs!</Typography>
          </Grid ><Grid item>
            <Typography variant="h4" component="span">First Community ETH Raffle</Typography>
            <Typography variant="subtitle1" >Once we sell out 50% of Cool Cats we’ll be doing a community exclusive raffle to win some Ethereum!</Typography>
          </Grid ><Grid item>
            <Typography variant="h4" component="span">Second Community ETH Raffle</Typography>
            <Typography variant="subtitle1" >Once we sell out 100% of Cool Cats we’ll be doing a community exclusive raffle to win some more Ethereum!</Typography>
          </Grid ><Grid item>
            <Typography variant="h4" component="span">Merch Store & Giveaway!</Typography >
            <Typography variant="subtitle1" >What better way to rep Cool Cats IRL than a sick ass shirt?? And of course, we’ll be giving away some goodies with this launch</Typography>
          </Grid ><Grid item>
            <Typography variant="h4" component="span">Gen 2 | Breeding </Typography >
            <Typography variant="subtitle1" >Once we launch Gen 1, we can work with the community to determine the BEST way to implement breeding for next Gen!</Typography>
          </Grid >
        </Grid >
      </Container >
    </Typography >
  );
}
