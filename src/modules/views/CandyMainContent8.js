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
          <Grid item>
            <Typography variant="h1" component="span">FAQ</Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">Cool Cat Live Stream!</Typography>
            <Typography variant="subtitle1" >Tune into Clon on Wednesday at 1PM EST and catch some live Cool Cat illustration community collaboration session (https://www.twitch.tv/cloncast)</Typography>
          </Grid >

          <Grid item>
            <Typography variant="h4" component="span">What’s an NFT?</Typography>
            <Typography variant="subtitle1" >An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a “members” card.</Typography>


            <Typography variant="subtitle1" > What is Metamask? Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Cool Cat. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io/)
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">Where does my NFT go after I purchase a Cool Cat?</Typography>
            <Typography variant="subtitle1" >Your Cool Cat NFT will appear in whatever address, or connected wallet you used to purchase the Cool Cat. You can see your Cool Cat here from our website, by clicking My Cats, or view them on Opensea. (Link to Opensea)
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">This sounds awesome, how do I get involved?</Typography>
            <Typography variant="subtitle1" >Head over to the Discord, jump in on the conversation and let us know your ideas!
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">Soo…Breeding?!</Typography>
            <Typography variant="subtitle1" >Yes! This will happen in Gen 2. We’re still contemplating the most optimal way to implement this and are hoping the community can weigh in as well, but breeding will in fact be a thing in Gen 2!
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">What can I do with my Cool Cat?</Typography>
            <Typography variant="subtitle1" >You are free to do anything with them under a non-exclusive license.
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">Are Cool Cats a good investment?</Typography>
            <Typography variant="subtitle1" >That is ultimately a decision for you to make. We believe Cool Cats have a long life ahead of them, and will be an ever growing and evolving project. However the success of Cool Cats relies on so many factors and variables, no one knows! Hopefully Cool Cats go to the moon, but like anything in life, don’t spend money you can’t afford to not have.
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">Who are you cats?</Typography>
            <Typography variant="subtitle1" >We’re a team of 4 nerds who are passionate about crypto, art, and makin’ cool stuff. Our team is comprised of Clon, previously knows as The Catoonist (https://www.instagram.com/thecatoonist/) around some parts - who is responsible for the origination of Blue Cat and all of the Cool Cats illustration. Tom, whose got the Jimmy Neutron brain responsible for the technical side from smart contracts to servers, all that “fun” stuff. Lynq is our ace up the sleeve dev ninja that builds out our cool website and shiny buttons so they actually do something when you click them, and ELU who is on creative direction, kicking pixel butt with Clon and also switches between marketing and project management.
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h4" component="span">Tokenomics?</Typography>
            <Typography variant="subtitle1" >We have reserved 100 cats to giveaway in competitions and holder airdrops. Most of these will be given out after launch and will not occupy the early token ids. The 4 members of staff have each been given a Cool Cat (not from the reserve pile). The remainder of the cats are all for sale.
            </Typography>
          </Grid >
          <Grid container spacing={5}>
            <Grid item xs={6} sm={8} md={3} />
            <Grid item xs={6} sm={8} md={7}>
              <img src="/static/candy/road.gif" style={{ width: "100%" }} alt="" />
            </Grid>
          </Grid>
        </Grid >
      </Container >
    </Typography >
  );
}
