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
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
    backgroundColor: theme.palette.doodoo.light,
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function CandyMainContent4(props) {
  const { classes } = props;

  return (
    <Typography component="section" className={classes.root}>
      <Container className={classes.root} component="section">
        <CardMedia
          component="img"
          style={{ width: "80%" }}
          image="/static/candy/download.jpeg"
          title="Doo Doo"
        />
        {props.children}
      </Container>
    </Typography>

  );
}

CandyMainContent4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandyMainContent4);