import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import SEO from '../components/SEO';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Awesome Material UI Starter" />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Awesome Material UI Starter
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h3">Time to code...</Typography>
    </div>
  );
}
