import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import { CardMedia } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: theme.spacing(9),
    // marginBottom: theme.spacing(9),
    backgroundColor: theme.palette.doodoo.light,
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    marginTop: "-40px",
    backgroundColor: "yellow",
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function CandyMainContent(props) {
  const { classes } = props;

  return (
    <Typography component="section" className={classes.root}>
      <Container className={classes.root} component="section">
        <CardMedia
          component="img"
          style={{ width: "50%" }}
          image="/static/candy/doodoogif.gif"
          title="Contemplative Reptile"
        />
        {props.children}
      </Container>
    </Typography>

  );
}

CandyMainContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandyMainContent);