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
          <Grid item xs={12}>
            <Typography variant="h4" component="span">Phase 1</Typography>
            <Typography variant="subtitle1" >Prepare Merch store and Generate 5000 DooDoo NFT</Typography>
          </Grid >
          <Grid item xs={12}>
            <Typography variant="h4" component="span">Phase 2</Typography>
            <Typography variant="subtitle1" >Launch DooDoo NFT and Drop our Merch Store after NFT launch</Typography>
          </Grid >
          <Grid item xs={12}>
            <Typography variant="h4" component="span">Phase 3</Typography>
            <Typography variant="subtitle1" >400 Pieces(Hoodie / Tshirt / Hat / Joggers / Sweater) Will randomly drop to Minter (Color / Size NotGurantee)</Typography>
          </Grid >
          <Grid item xs={12}>
            <Typography variant="h4" component="span">Phase 4</Typography>
            <Typography variant="subtitle1" >More collection Merch will be designed and sell on our website, and will be looking for other projects to collab some merchs</Typography>
          </Grid >
          <Grid item xs={12}>
            <Typography variant="h4" component="span">Phase 5</Typography>
            <Typography variant="subtitle1" >Donate merch & funds to charity spread the ❤️
              ALL holder will get 20% off of our merch store
              Every new collection released, we will do giveaway to the community</Typography>
          </Grid >
        </Grid >
      </Container >
    </Typography >
  );
}
