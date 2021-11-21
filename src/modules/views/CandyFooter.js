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
    backgroundColor: theme.palette.doodoo.light,
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

export default function CandyFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="/">
                  <img src="/static/candy/logo.png" style={{ width: "100%" }} alt="" />
                </a>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Grid item className={classes.icons} style={{ justifyContent: "center" }}>
              <a href="https://discord.gg/z2HNzbbkPf" className={classes.icon}>
                <img src="/static/candy/download-1.png" alt="Discord" />
              </a>
              <a href="https://twitter.com/doodoo_nft" className={classes.icon}>
                <img src="/static/candy/download-2.png" alt="Twitter" />
              </a>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={8} md={4} style={{ alignSelf: "center" }}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
